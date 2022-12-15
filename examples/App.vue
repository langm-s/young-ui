<!--
 * @Author: junshao
 * @Date: 2022-12-07 10:15:03
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-13 11:46:41
 * @Description: file content
-->
<template>
  <div id="app">
    <h1 class="y-title">欢迎使用 young UI</h1>
    <div class="component-example-container">
      <div class="side-component-list">
        <div class="young-ui-component">young UI组件</div>
        <side-component></side-component>
      </div>
      <div class="component-item-detail">
        <button-component></button-component>
      </div>
    </div>
  </div>
</template>

<script>
import SideComponent from "./components/SideComponent.vue";
import ButtonComponent from "./components/ButtonComponent.vue";
export default {
  components: { SideComponent, ButtonComponent },
  data() {
    return {};
  },
  mounted() { },
  methods: {},
};
</script>

<style lang="scss">
#app {
  width: 1200px;
  margin: 0 auto;

  .y-title {
    text-align: center;
    color: #0099ff;
    border-bottom: 1px solid #ccc;
    padding: 15px 0;
  }

  .component-example-container {
    display: flex;
    width: 100%;
    height: calc(100vh - 80px);
    padding: 10px 0;

    .side-component-list {
      display: inline-block;
      width: 280px;
      height: 100%;
      border-right: 1px solid #ccc;
      color: #444444;
      background-color: #fff;
      text-align: center;

      .young-ui-component {
        font-weight: bold;
        line-height: 50px;
        // background-color: #eee;
        border-radius: 8px;
        margin-bottom: 20px;
      }
    }

    .component-item-detail {
      display: inline-block;
      width: 920px;
      height: 100%;
      padding: 15px 25px;
    }
  }
}
</style>
