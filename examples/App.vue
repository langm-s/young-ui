<!--
 * @Author: junshao
 * @Date: 2022-12-07 10:15:03
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-07 10:43:22
 * @Description: file content
-->
<template>
  <div id="app">
    <h1 class="y-title">欢迎使用 young UI</h1>
    <div class="component-flex">
      <y-button></y-button>
    </div>
  </div>
</template>

<script>
import yButton from "../packages/young-table/young-table.vue";
export default {
  components: { yButton },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  .y-title {
    text-align: center;
    color: #0099ff;
  }

  .component-flex {
    display: flex;
    justify-content: space-around;
  }
}
</style>
