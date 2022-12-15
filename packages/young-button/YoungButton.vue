<!--
 * @Author: junshao
 * @Date: 2022-12-07 10:35:02
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-13 10:56:27
 * @Description: young-table 封装el-table表格
-->
<template>
  <button class="y-button" :class="classObj" type="button" @click="handleClick" :disabled="disabled">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "yButton",
  components: {},
  data() {
    return {
      classObj: {
        "primary-type": this.type === "primary",
        "normal-type": this.type === "normal",
        "success-type": this.type === "success",
        "danger-type": this.type === "danger",
        "warning-type": this.type === "warning",
        "text-type": this.type === "text",
        "default-type": !this.type,
        "disabled-button": this.disabled,
      },
    };
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>
<style lang="scss" scoped>
.y-button {
  display: inline-block;
  line-height: 100%;
  padding: 8px 10px;
  margin: 0 10px;
  border: none;
  color: #606266;
  border-radius: 6px;
  cursor: pointer;
}

.default-type {
  background-color: #fff;
  border: 1px solid #ccc;
}

.primary-type {
  color: #fff;
  background-color: #0099ff;
}

.success-type {
  color: #fff;
  background-color: #00ad00;
}

.normal-type {
  color: #fff;
  background-color: #909399;
}

.danger-type {
  color: #fff;
  background-color: #e20202;
}

.warning-type {
  color: #fff;
  background-color: #ee8700;
}

.text-type {
  color: #0099ff;
  background-color: none;
  padding: 0;
  border: none;
}

.disabled-button {
  cursor: not-allowed;
}
</style>
