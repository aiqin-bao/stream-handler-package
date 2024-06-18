export const handlerStreamResponse = (response: any) => {

    async function* streamSSE(responseStream: any) {
        const decoder = new TextDecoder();
        let buffer = '';

        for await (const chunk of responseStream) {
            buffer += decoder.decode(chunk, { stream: true });

            let boundary;
            while ((boundary = buffer.indexOf('\n\n')) !== -1) {
                const messageChunk = buffer.slice(0, boundary).trim();
                buffer = buffer.slice(boundary + 2);
                if (messageChunk) yield messageChunk;
            }
        }
    }

    async function* makeIterator(responseStream: any) {
        for await (const message of streamSSE(responseStream)) {
            try {
                const _message = message.replace(/^data: /, '');
                const parsedMessage = JSON.parse(_message);
                if (parsedMessage && parsedMessage.choices && parsedMessage.choices[0] && parsedMessage.choices[0].delta) {
                    const delta = parsedMessage.choices[0].delta.content;
                    yield delta;
                }
            } catch (e) {
                continue;
            }
        }
    }

    async function* aggregateQuestions(responseStream: AsyncGenerator<any, void, unknown>) {
        let buffer = '';
        for await (const chunk of makeIterator(responseStream)) {
            buffer += chunk;
            let endIndex = buffer.indexOf('}');
            while (endIndex !== -1) {
                let startIndex = buffer.lastIndexOf('{', endIndex);
                if (startIndex === -1 || endIndex - startIndex < 2) {
                    endIndex = buffer.indexOf('}', endIndex + 1);
                    continue;
                }
                const jsonStr = buffer.substring(startIndex, endIndex + 1);
                buffer = buffer.substring(endIndex + 1);
                try {
                    const question = JSON.parse(jsonStr);
                    yield question;
                } catch (e) {
                    console.error(`Error parsing JSON: ${e}, String: ${jsonStr}`);
                }
                endIndex = buffer.indexOf('}');
            }
        }
        if (buffer) {
            console.warn('Buffer not empty, possibly incomplete JSON:', buffer);
        }
    }

    function createStreamFromIterator(iterator: AsyncGenerator<any, void, unknown>) {
        return new ReadableStream({
            async pull(controller) {
                const { value, done } = await iterator.next();
                if (done) {
                    controller.close();
                } else {
                    controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify(value)}\n\n`));
                }
            }
        });
    }

    const streamIterator = aggregateQuestions(response.data);

    return createStreamFromIterator(streamIterator);
}
