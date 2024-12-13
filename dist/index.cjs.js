'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerStreamResponse = void 0;
var tslib_1 = require("tslib");
var handlerStreamResponse = function (response) {
    function streamSSE(responseStream) {
        return tslib_1.__asyncGenerator(this, arguments, function streamSSE_1() {
            var decoder, buffer, _a, responseStream_1, responseStream_1_1, chunk, boundary, messageChunk, e_1_1;
            var _b, e_1, _c, _d;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        decoder = new TextDecoder();
                        buffer = '';
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 13, 14, 19]);
                        _a = true, responseStream_1 = tslib_1.__asyncValues(responseStream);
                        _e.label = 2;
                    case 2: return [4 /*yield*/, tslib_1.__await(responseStream_1.next())];
                    case 3:
                        if (!(responseStream_1_1 = _e.sent(), _b = responseStream_1_1.done, !_b)) return [3 /*break*/, 12];
                        _d = responseStream_1_1.value;
                        _a = false;
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, , 10, 11]);
                        chunk = _d;
                        buffer += decoder.decode(chunk, { stream: true });
                        boundary = void 0;
                        _e.label = 5;
                    case 5:
                        if (!((boundary = buffer.indexOf('\n\n')) !== -1)) return [3 /*break*/, 9];
                        messageChunk = buffer.slice(0, boundary).trim();
                        buffer = buffer.slice(boundary + 2);
                        if (!messageChunk) return [3 /*break*/, 8];
                        return [4 /*yield*/, tslib_1.__await(messageChunk)];
                    case 6: return [4 /*yield*/, _e.sent()];
                    case 7:
                        _e.sent();
                        _e.label = 8;
                    case 8: return [3 /*break*/, 5];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        _a = true;
                        return [7 /*endfinally*/];
                    case 11: return [3 /*break*/, 2];
                    case 12: return [3 /*break*/, 19];
                    case 13:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 19];
                    case 14:
                        _e.trys.push([14, , 17, 18]);
                        if (!(!_a && !_b && (_c = responseStream_1.return))) return [3 /*break*/, 16];
                        return [4 /*yield*/, tslib_1.__await(_c.call(responseStream_1))];
                    case 15:
                        _e.sent();
                        _e.label = 16;
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 18: return [7 /*endfinally*/];
                    case 19: return [2 /*return*/];
                }
            });
        });
    }
    function makeIterator(responseStream) {
        return tslib_1.__asyncGenerator(this, arguments, function makeIterator_1() {
            var _a, _b, _c, message, _message, parsedMessage, delta, e_3_1;
            var _d, e_3, _e, _f;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 13, 14, 19]);
                        _a = true, _b = tslib_1.__asyncValues(streamSSE(responseStream));
                        _g.label = 1;
                    case 1: return [4 /*yield*/, tslib_1.__await(_b.next())];
                    case 2:
                        if (!(_c = _g.sent(), _d = _c.done, !_d)) return [3 /*break*/, 12];
                        _f = _c.value;
                        _a = false;
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, , 10, 11]);
                        message = _f;
                        _g.label = 4;
                    case 4:
                        _g.trys.push([4, 8, , 9]);
                        _message = message.replace(/^data: /, '');
                        parsedMessage = JSON.parse(_message);
                        if (!(parsedMessage && parsedMessage.choices && parsedMessage.choices[0] && parsedMessage.choices[0].delta)) return [3 /*break*/, 7];
                        delta = parsedMessage.choices[0].delta.content;
                        return [4 /*yield*/, tslib_1.__await(delta)];
                    case 5: return [4 /*yield*/, _g.sent()];
                    case 6:
                        _g.sent();
                        _g.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        _g.sent();
                        return [3 /*break*/, 11];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        _a = true;
                        return [7 /*endfinally*/];
                    case 11: return [3 /*break*/, 1];
                    case 12: return [3 /*break*/, 19];
                    case 13:
                        e_3_1 = _g.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 19];
                    case 14:
                        _g.trys.push([14, , 17, 18]);
                        if (!(!_a && !_d && (_e = _b.return))) return [3 /*break*/, 16];
                        return [4 /*yield*/, tslib_1.__await(_e.call(_b))];
                    case 15:
                        _g.sent();
                        _g.label = 16;
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        if (e_3) throw e_3.error;
                        return [7 /*endfinally*/];
                    case 18: return [7 /*endfinally*/];
                    case 19: return [2 /*return*/];
                }
            });
        });
    }
    function aggregateQuestions(responseStream) {
        return tslib_1.__asyncGenerator(this, arguments, function aggregateQuestions_1() {
            var buffer, _a, _b, _c, chunk, endIndex, startIndex, jsonStr, question, e_4, e_5_1;
            var _d, e_5, _e, _f;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        buffer = '';
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 15, 16, 21]);
                        _a = true, _b = tslib_1.__asyncValues(makeIterator(responseStream));
                        _g.label = 2;
                    case 2: return [4 /*yield*/, tslib_1.__await(_b.next())];
                    case 3:
                        if (!(_c = _g.sent(), _d = _c.done, !_d)) return [3 /*break*/, 14];
                        _f = _c.value;
                        _a = false;
                        _g.label = 4;
                    case 4:
                        _g.trys.push([4, , 12, 13]);
                        chunk = _f;
                        buffer += chunk;
                        endIndex = buffer.indexOf('}');
                        _g.label = 5;
                    case 5:
                        if (!(endIndex !== -1)) return [3 /*break*/, 11];
                        startIndex = buffer.lastIndexOf('{', endIndex);
                        if (startIndex === -1 || endIndex - startIndex < 2) {
                            endIndex = buffer.indexOf('}', endIndex + 1);
                            return [3 /*break*/, 5];
                        }
                        jsonStr = buffer.substring(startIndex, endIndex + 1);
                        buffer = buffer.substring(endIndex + 1);
                        _g.label = 6;
                    case 6:
                        _g.trys.push([6, 9, , 10]);
                        question = JSON.parse(jsonStr);
                        return [4 /*yield*/, tslib_1.__await(question)];
                    case 7: return [4 /*yield*/, _g.sent()];
                    case 8:
                        _g.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        e_4 = _g.sent();
                        console.error("Error parsing JSON: ".concat(e_4, ", String: ").concat(jsonStr));
                        return [3 /*break*/, 10];
                    case 10:
                        endIndex = buffer.indexOf('}');
                        return [3 /*break*/, 5];
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        _a = true;
                        return [7 /*endfinally*/];
                    case 13: return [3 /*break*/, 2];
                    case 14: return [3 /*break*/, 21];
                    case 15:
                        e_5_1 = _g.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 21];
                    case 16:
                        _g.trys.push([16, , 19, 20]);
                        if (!(!_a && !_d && (_e = _b.return))) return [3 /*break*/, 18];
                        return [4 /*yield*/, tslib_1.__await(_e.call(_b))];
                    case 17:
                        _g.sent();
                        _g.label = 18;
                    case 18: return [3 /*break*/, 20];
                    case 19:
                        if (e_5) throw e_5.error;
                        return [7 /*endfinally*/];
                    case 20: return [7 /*endfinally*/];
                    case 21:
                        if (buffer) {
                            console.warn('Buffer not empty, possibly incomplete JSON:', buffer);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function createStreamFromIterator(iterator) {
        return new ReadableStream({
            pull: function (controller) {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    var _a, value, done;
                    return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, iterator.next()];
                            case 1:
                                _a = _b.sent(), value = _a.value, done = _a.done;
                                if (done) {
                                    controller.close();
                                }
                                else {
                                    controller.enqueue(new TextEncoder().encode("data: ".concat(JSON.stringify(value), "\n\n")));
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            }
        });
    }
    var streamIterator = aggregateQuestions(response.data);
    return createStreamFromIterator(streamIterator);
};
exports.handlerStreamResponse = handlerStreamResponse;
