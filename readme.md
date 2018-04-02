1) `yarn`
2) `npx webpack`

You should see the following:
```bash

Hash: c831a8dbcf87d4d672b6
Version: webpack 4.4.1
Time: 5421ms
Built at: 4/2/2018 12:40:30 PM
      Asset       Size  Chunks             Chunk Names
manifest.js   1.04 KiB       0  [emitted]  manifest
  vendor.js   69.5 KiB       1  [emitted]  vendor
    main.js  151 bytes       2  [emitted]  main
 index.html  620 bytes          [emitted]
Entrypoint main = manifest.js vendor.js main.js
   [1] (webpack)/buildin/module.js 519 bytes {1} [built]
   [2] (webpack)/buildin/global.js 509 bytes {1} [built]
   [3] ./src/index.js 46 bytes {2} [built]
    + 1 hidden module

ERROR in   TypeError: code.replace is not a function

  - source-map-url.js:44 Object.removeFrom
    [manifest-2]/[source-map-url]/source-map-url.js:44:19

  - index.js:29
    [manifest-2]/[webpack-inline-manifest-plugin]/index.js:29:55


  - new Promise


  - Hook.js:35 AsyncSeriesWaterfallHook.lazyCompileHook [as _promise]
    [manifest-2]/[tapable]/lib/Hook.js:35:21

  - index.js:652
    [manifest-2]/[html-webpack-plugin]/index.js:652:47

  - index.js:163 Promise.resolve.then.then.then.then.compilationResult
    [manifest-2]/[html-webpack-plugin]/index.js:163:36



Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
       [0] (webpack)/buildin/module.js 519 bytes {0} [built]
       [1] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] ./node_modules/html-webpack-plugin/lib/loader.js!./index.ejs 613 bytes {0} [built]
        + 1 hidden module
```
