/*
 * @Author: junshao
 * @Date: 2022-12-05 11:31:37
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-21 11:11:12
 * @Description: file content
 */

const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
module.exports = {
  // publicPath 项目打包后的文件访问路径
  publicPath: "./",
  configureWebpack: {
    name: "junshao-ui",
    resolve: {
      alias: {
        "@": resolve("packages"),
      },
    },
  },
  chainWebpack: (config) => {
    // 同上面configureWebpack中resolve配置一样的功能
    // config.resolve.alias.set("@", resolve("packages"));
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
  },
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  css: {
    extract: {
      Type: true,
    },
  },
};
