<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 财务管理</el-breadcrumb-item>
        <el-breadcrumb-item>提现申请</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-table
      :data="data"
      border
      stripe
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      v-loading="loading">
      <el-table-column prop="date" label="申请人" sortable width="150"></el-table-column>
      <el-table-column prop="name" label="提现金额" width=""></el-table-column>
      <el-table-column prop="name" label="提现时间" width=""></el-table-column>
      <el-table-column label="操作" width="250">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="small"
            type="success"
            @click="handleDelete(scope.$index, scope.row)">通过
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">拒绝
          </el-button>
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
