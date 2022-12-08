<!--
 * @Author: junshao
 * @Date: 2022-12-07 10:35:02
 * @LastEditors: junshao
 * @LastEditTime: 2022-12-07 10:38:05
 * @Description: young-table 封装el-table表格
-->
<template>
  <div class="y-button" :class="classObj">按 钮</div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      classObj: {
        "primary-type": this.type === "primary",
        "normal-type": this.type === "normal",
        "success-type": this.type === "success",
        "danger-type": this.type === "danger",
        "warning-type": this.type === "warning",
      },
    };
  },
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.y-button {
  display: inline-block;
  line-height: 100%;
  padding: 6px 10px;
  margin: 0 10px;
  color: #fff;
  background-color: #c1c1c1;
  border-radius: 6px;
  cursor: pointer;
}
.primary-type {
  background-color: #0099ff;
}
.success-type {
  background-color: #00cc00;
}
.normal-type {
  background-color: #969696;
}
.danger-type {
  background-color: #e20202;
}
.warning-type {
  background-color: #ee8700;
}
</style>
