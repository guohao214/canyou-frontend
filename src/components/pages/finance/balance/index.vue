<template>

  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 财务管理</el-breadcrumb-item>
        <el-breadcrumb-item>我的资金</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="balances">
      <div class="balance one">
        <div class="amount">500,00.00</div>
        <div class="txt">销售金额</div>
      </div>
      <div class="balance two">
        <div class="amount">500,00.00</div>
        <div class="txt">可提现金额</div>
      </div>
      <div class="balance three">
        <div class="amount">500,00.00</div>
        <div class="txt">已提现金额</div>
      </div>
    </div>
    <div class="handle-box">
      <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
      <el-button type="primary" icon="" @click="search">提现</el-button>
    </div>
    <el-table
      :data="data"
      border
      stripe
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      v-loading="loading">
      <el-table-column prop="date" label="流水号" sortable width="150"></el-table-column>
      <el-table-column prop="name" label="支付时间" width=""></el-table-column>
      <el-table-column prop="name" label="客户姓名" width=""></el-table-column>
      <el-table-column prop="name" label="支付方式" width=""></el-table-column>
      <el-table-column prop="name" label="金额" width=""></el-table-column>
      <el-table-column prop="name" label="收款账户" width=""></el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>

</template>

<style lang="stylus" scoped>
  @import "./index.styl"
</style>

<script>
  import index from './index.js'
  export default index
</script>
