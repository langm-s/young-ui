/*
 * @Author: junshao
 * @Date: 2022-12-07 10:35:08
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-08 09:08:14
 * @Description: 导出单个组件
 */
import yButton from "./YoungButton.vue";

// 为组件注册install方法
yButton.install = function (Vue) {
  Vue.component(yButton.name.yButton);
};

// 导出组件
export default yButton;
