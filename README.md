## Stream Handler Package
A package for handling Server-Sent Events (SSE) responses and aggregating questions from a streaming API.



### Installation
You can install the package via npm:

```
npm install stream-handler-package

```
### Usage
The handlerStreamResponse function processes a streaming API response and aggregates questions from it. Here's how to use it:

```
import { handlerStreamResponse } from 'stream-handler-package';

```

#### Use the function



#### API

handlerStreamResponse(response)

Processes the streaming API response and aggregates questions.

#### Parameters:

response: 
The response object from the streaming API (typically an Axios response with responseType: 'stream').
Returns:

A ReadableStream that yields aggregated questions as JSON strings.

Example

Here is a complete example that demonstrates how to use the handlerStreamResponse function with an Axios streaming response:


```
import { handlerStreamResponse } from 'stream-handler-package';
import axios from 'axios';
axios.get('https://api.example.com/stream', {
    responseType: 'stream',
}
).then((response) => {
    const stream = handlerStreamResponse(response);   
}

```

Response Headers 

```
headers: {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Transfer-Encoding': 'chunked',
},
```

Response Stream 

<b>A ReadableStream that yields aggregated questions as JSON strings.</b>

```
{"type":"true_false","question":"北京是中国唯一一个拥有超过3000年建城史的城市。","options":"","answer":"错误"}

{"type":"true_false","question":"北京是中国的文化、教育、国际交流和科技创新的重要中心。","options":"","answer":"正确"}

{"type":"question","question":"北京有哪些著名的历史文化遗产？","options":"","answer":"故宫、天坛、颐和园、圆明园、长城、明十三陵等。"}
```

stream is a ReadableStream that yields aggregated questions as JSON strings.