/*
 * @Author: junshao
 * @Date: 2022-12-07 10:35:08
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-07 11:51:53
 * @Description: 导出单个组件
 */
import yTbale from "./YoungButton.vue";

// 为组件注册install方法
yTbale.install = function (Vue) {
  Vue.component(yTbale.name.yTbale);
};

// 导出组件
export default yTbale;
