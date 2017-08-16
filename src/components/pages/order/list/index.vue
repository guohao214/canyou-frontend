<template>

  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 财务管理</el-breadcrumb-item>
        <el-breadcrumb-item>收支明细</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="handle-box">
      <el-date-picker
        v-model="value3"
        type="datetimerange"
        placeholder="选择时间范围">
      </el-date-picker>
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
      <el-table-column prop="date" label="订单号" sortable width="150"></el-table-column>
      <el-table-column prop="name" label="下单时间" width=""></el-table-column>
      <el-table-column prop="name" label="客户姓名" width=""></el-table-column>
      <el-table-column prop="name" label="金额" width=""></el-table-column>
      <el-table-column prop="name" label="出库/发货" width=""></el-table-column>
      <el-table-column prop="name" label="状态" width=""></el-table-column>
      <el-table-column prop="name" label="交货日期" width=""></el-table-column>
      <el-table-column prop="name" label="付款状态" width=""></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template scope="scope">
          <el-button @click="handleClick" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
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
