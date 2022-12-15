<!--
 * @Author: junshao
 * @Date: 2022-12-12 16:30:46
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-12 16:38:57
 * @Description: file content
-->
<template>
  <div>
    <div v-for="component in componentList" :key="component.name" class="component-item" :class="{
      'active-component-item': component.name == activeComponentName,
    }" @click="activeComponentName = component.name">
      {{ component.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "component-list-vue",
  components: {},
  data() {
    return {
      activeComponentName: "y-button",
      componentList: [
        {
          name: "y-button",
          label: "button按钮",
        },
        {
          name: "y-radio",
          label: "radio单选框",
          isActice: false,
        },
        {
          name: "y-checkbox",
          label: "checkbox多选框",
        },
        {
          name: "y-input",
          label: "input输入框",
        },
        {
          name: "y-select",
          label: "select下拉选择器",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {},
};
</script>
<style lang="scss" scoped>
.component-item {
  line-height: 40px;
  cursor: pointer;
}

.active-component-item,
.component-item:hover {
  background-color: #eee;
  color: #0099ff;
}
</style>
