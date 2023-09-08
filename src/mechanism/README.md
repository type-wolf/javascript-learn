## Learning about ESMAScript

-   [Github](https://github.com/tc39/ecma262)
-   [Specification Document](https://tc39.es/ecma262/)
-   [Process](https://tc39.es/process-document/)
-   [TS39](https://tc39.es)

## JavaScript の実行環境

1. V8 (JavaScript Engine & WebAPIs)
2. Node.js

## V8 について

1. JavaScript Engine: ESMAScript を実行する環境
2. WebAPIs: JavaScript で Fetch などの API を扱ったり、Browser を操作する環境

## Browser と実行環境

1. Chrome: V8
2. Safari: JavaScript Core
3. Firefox: SpiderMonkey
4. Edge: Chakra / V8
5. Opera: V8

## V8 がコードの実行前に予め準備している事

1. `window`オブジェクト(WebAPIs が含まれている)
2. `this`

```javascript
console.log(window)
    -> Window: {...}
```

```javascript
console.log(this)
    -> Window: { ... }
```
