<template>

  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 财务管理</el-breadcrumb-item>
        <el-breadcrumb-item>收款确定</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="handle-box">
      <el-select v-model="value8" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
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
      <el-table-column prop="name" label="摘要" width=""></el-table-column>
      <el-table-column prop="name" label="状态" width=""></el-table-column>
      <el-table-column prop="name" label="状态" width=""></el-table-column>
      <el-table-column prop="name" label="状态" width=""></el-table-column>
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
