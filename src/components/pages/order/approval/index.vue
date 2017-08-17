<template>
  <div class="page">
    <div class="tool-bar" v-if="showToolbar">
      <el-button type="text" size="small" @click.native="isEdit = true" v-if="!isEdit">修改</el-button>
      <el-button type="primary" v-else @click="isEdit=false">保存</el-button>
      <el-button type="text" size="small">打印</el-button>
      <el-button type="text" size="small">导出</el-button>
      <el-button type="text" size="small">作废</el-button>
      <el-button type="success">通过</el-button>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="订单详情" name="first">
        <order-detail :isEdit="isEdit"></order-detail>
      </el-tab-pane>
      <el-tab-pane label="出库/发货记录" name="second">
        <deliver-goods></deliver-goods>
      </el-tab-pane>
      <el-tab-pane label="收款记录" name="third">
        <order-cash></order-cash>
      </el-tab-pane>
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
