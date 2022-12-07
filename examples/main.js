/*
 * @Author: junshao
 * @Date: 2022-12-07 10:14:54
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-07 10:34:32
 * @Description: file content
 */
import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "../assets/reset.css"
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
