# webpack-loader

## loader-runner

允许你在不安装 webpack 的情况下运行 loaders.

作用:
- 作为 webpack 的依赖，webpack 中使用它执行 loader.
- 进行 loader 的开发和调试.

## loader 开发

### loader 的参数获取

通过 loader-utils 的 getOptions 方法获取.

```js
const loaderUtils = require('loader-utils');

module.exports = function(source) {
  const { name } = loaderUtils.getOptions(this);
};
```
### loader 异常处理

loader 内直接通过 throw 抛出

通过 this.callback 传递错误
```js
this.callback(
  err: Error | null,
  content: string | Buffer,
  sourceMap?: SourceMap,
  meta?: any
);
```

### loader 的异步处理

通过 this.async 来返回一个异步函数.
- 第一个参数是 Error, 第二个参数是处理结果.

### 在 loader 中使用缓存

webpack 中默认开启 loader 缓存.
- 可以使用 this.cacheable(false) 关掉缓存.

缓存条件: loader 的结果在相同的输入下有确定的输出.
- 有依赖的 loader 无法使用缓存.

### loader 如何进行文件输出

通过 this.emitFile 进行文件写入.
