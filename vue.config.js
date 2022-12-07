/*
 * @Author: junshao
 * @Date: 2022-12-05 11:31:37
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-07 10:21:38
 * @Description: file content
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("examples"))
      .set("young-ui/packages", resolve("packages"))
      .set("young-ui/lib", resolve("lib"));
  },
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  css: { extract: false },
};
