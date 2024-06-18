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

stream is a ReadableStream that yields aggregated questions as JSON strings.