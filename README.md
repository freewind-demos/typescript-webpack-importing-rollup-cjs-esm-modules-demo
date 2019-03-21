TypeScript Webpack Importing Rollup "cjs" "mjs" Demo
=====================================================

如果两个module同时发布了两种格式的bundle文件:

```
output: [{
  file: pkg.main,
  format: 'cjs'
}, {
  file: pkg.module,
  format: 'esm'
}]
```

并且其中一个引用了另一个：

```
import {module1} from 'typescript-webpack-importing-rollup-mjs-es-modules-demo--module1';
```

那么当一个项目同时使用这两个module的时候，希望使用它们的cjs版本的bundle，会不会有问题？

答案是没问题：

1. 在该项目中webpack.config.js的`mainFields`中指定使用`main`字段指向的bundle文件

   这样做可以简单的解决问题，但是有一个顾虑，就是它将会同时指定所有引用的模块优先使用的字段。有没有办法单独指定？

2. 在该项目中引用这两个module时，指定使用js文件：`import {module1} from 'typescript-webpack-importing-rollup-mjs-es-modules-demo--module1/dist/index.js';`
   
   注意，在使用这种办法时，要求`index.js`与`index.d.ts`两者的文件名主要部分需要一致，否则会找不到，得加上`// @ts-ignore`

运行：
   
```
npm install
npm run demo
```
