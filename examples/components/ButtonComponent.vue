<!--
 * @Author: junshao
 * @Date: 2022-12-13 09:37:41
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-13 11:46:16
 * @Description: file content
-->
<template>
  <div>
    <div class="component-piece">
      <h3>基础用法</h3>
      <y-button @click="handleClick">默认按钮</y-button>
      <y-button :type="'normal'" @click="handleClick">信息按钮</y-button>
      <y-button :type="'primary'">常规按钮</y-button>
      <y-button :type="'success'">绿色按钮</y-button>
      <y-button :type="'warning'">警告按钮</y-button>
      <y-button :type="'danger'">危险别按</y-button>
      <div class="use-info">使用type属性定义Button的样式</div>
    </div>
    <div class="component-piece">
      <h3>禁用状态</h3>
      <y-button disabled>默认按钮</y-button>
      <y-button :type="'normal'" disabled>信息按钮</y-button>
      <y-button :type="'primary'" disabled>常规按钮</y-button>
      <y-button :type="'success'" disabled>绿色按钮</y-button>
      <y-button :type="'warning'" disabled>警告按钮</y-button>
      <y-button :type="'danger'" disabled>危险别按</y-button>
      <div class="use-info">使用disabled属性设置Button的禁用状态</div>
    </div>
    <div class="component-piece">
      <h3>文字按钮</h3>
      <y-button :type="'text'">文字按钮</y-button>
      <y-button :type="'text'" disabled="">文字按钮</y-button>
      <div class="use-info">
        将type属性设置为text，成为没有边框和背景色的按钮
      </div>
    </div>
  </div>
</template>

<script>
import YButton from "../../packages/young-button/YoungButton.vue";
export default {
  name: "",
  components: { YButton },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    handleClick() {
      window.alert("点击了按钮");
    },
  },
};
</script>
<style lang="scss" scoped>
.component-piece {
  margin-bottom: 30px;

  h3 {
    margin-bottom: 10px;
  }

  .use-info {
    color: #5e6d82;
    background-color: #eee;
    margin: 10px;
    padding: 5px;
    line-height: 28px;
  }
}
</style>
