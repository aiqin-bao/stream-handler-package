/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var handlerStreamResponse = function (response) {
    function streamSSE(responseStream) {
        return __asyncGenerator(this, arguments, function streamSSE_1() {
            var decoder, buffer, _a, responseStream_1, responseStream_1_1, chunk, boundary, messageChunk, e_1_1;
            var _b, e_1, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        decoder = new TextDecoder();
                        buffer = '';
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 13, 14, 19]);
                        _a = true, responseStream_1 = __asyncValues(responseStream);
                        _e.label = 2;
                    case 2: return [4 /*yield*/, __await(responseStream_1.next())];
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
                        return [4 /*yield*/, __await(messageChunk)];
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
                        return [4 /*yield*/, __await(_c.call(responseStream_1))];
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
        return __asyncGenerator(this, arguments, function makeIterator_1() {
            var _a, _b, _c, message, _message, parsedMessage, delta, e_3_1;
            var _d, e_3, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 13, 14, 19]);
                        _a = true, _b = __asyncValues(streamSSE(responseStream));
                        _g.label = 1;
                    case 1: return [4 /*yield*/, __await(_b.next())];
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
                        return [4 /*yield*/, __await(delta)];
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
                        return [4 /*yield*/, __await(_e.call(_b))];
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
        return __asyncGenerator(this, arguments, function aggregateQuestions_1() {
            var buffer, _a, _b, _c, chunk, endIndex, startIndex, jsonStr, question, e_4, e_5_1;
            var _d, e_5, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        buffer = '';
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 15, 16, 21]);
                        _a = true, _b = __asyncValues(makeIterator(responseStream));
                        _g.label = 2;
                    case 2: return [4 /*yield*/, __await(_b.next())];
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
                        return [4 /*yield*/, __await(question)];
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
                        return [4 /*yield*/, __await(_e.call(_b))];
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
                return __awaiter(this, void 0, void 0, function () {
                    var _a, value, done;
                    return __generator(this, function (_b) {
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

export { handlerStreamResponse };
