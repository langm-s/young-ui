/*
 * @Author: junshao
 * @Date: 2022-12-07 11:52:48
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-07 12:00:33
 * @Description: 全局导出所有组件
 */
import yTable from "./young-button";

// 组件存储列表
const yComponents = [yTable];

// 定义install方法，接受Vue作为参数，使用Vue.use注册插件，所有组件都被注册到全局
const install = function (Vue) {
  if (install.installed) {
    return;
  }
  // 遍历注册所有组件
  yComponents.map((component) => Vue.component(component.name, component));
};

// 判断是否直接引入文件
if (typeof window !== undefined && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  yTable,
};
