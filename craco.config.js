// const CracoLessPlugin = require("craco-less");

const path = require("path");
const resolve = pathname => path.resolve(__dirname, pathname);

module.exports = {
  webpack: {
    alias: {
      "@": resolve('src'),
      "components": resolve('src/components'),
      'css': resolve('src/assets/css'),
      'views': resolve('src/views'),
      'router': resolve('src/router'),
      'store': resolve('src/store'),
      'services': resolve('src/services'),
    },
  // plugins: [{ plugin: CracoLessPlugin }],
    // plugins: {
    //   add: [ /* ... */ ],
    //   remove: [ /* ... */ ],
    // },
    // configure: { /* ... */},
  },
}