<template>

<div class="table">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
          <el-breadcrumb-item>基础表格</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="balances">
        <div class="balance one"></div>
        <div class="balance two"></div>
        <div class="balance three"></div>
      </div>
      <div class="handle-box">
        <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
        <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
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
        <el-table-column type="selection" width="55"></el-table-column>
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
