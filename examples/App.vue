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
    <div class="component-example-container">
      <div class="side-component-list">
        <div
          v-for="component in componentList"
          :key="component.name"
          class="component-item"
        >
          {{ component.label }}
        </div>
      </div>
      <div class="component-item-detail">
        <y-button :type="'normal'"></y-button>
        <y-button :type="'primary'"></y-button>
        <y-button :type="'success'"></y-button>
        <y-button :type="'warning'"></y-button>
        <y-button :type="'danger'"></y-button>
      </div>
    </div>
  </div>
</template>

<script>
import yButton from "../packages/young-button/YoungButton.vue";
export default {
  components: { yButton },
  data() {
    return {
      componentList: [
        {
          name: "y-button",
          label: "按钮",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  width: 1600px;
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
    height: calc(100vh - 68px);
    padding: 10px 0;
    .side-component-list {
      display: inline-block;
      width: 280px;
      height: 100%;
      border-right: 1px solid #ccc;
      background-color: #fff;
      text-align: center;
      .component-item {
        line-height: 40px;
        cursor: pointer;
      }
      .component-item:hover {
        background-color: #eee;
        color: #0099ff;
      }
    }
    .component-item-detail {
      display: inline-block;
      width: 1320px;
      height: 100%;
      padding: 15px 25px;
    }
  }
}
</style>
