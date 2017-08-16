<template>
  <div class="page">
    <div class="tool-bar">
      <el-button type="text" size="small">修改</el-button>
      <el-button type="text" size="small">打印</el-button>
      <el-button type="text" size="small">导出</el-button>
      <el-button type="text" size="small">作废</el-button>
      <el-button type="success">通过</el-button>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="订单详情" name="first">
        <order-detail></order-detail>
      </el-tab-pane>
      <el-tab-pane label="出库/发货记录" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="收款记录" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>

</template>

<style lang="stylus" scoped>
  @import "./index.styl"
</style>

<script>
  import index from './index.js'
  export default index
</script>
