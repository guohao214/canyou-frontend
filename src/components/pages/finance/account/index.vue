<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 财务管理</el-breadcrumb-item>
        <el-breadcrumb-item>收款账户</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="在线支付" name="online">在线支付</el-tab-pane>
      <el-tab-pane label="线下支付" name="offline">
        <el-button type="success" @click="addAccountFormVisible = true">新增</el-button>
        <el-table
          :data="data"
          border
          stripe
          ref="multipleTable"
          v-loading="loading">
          <el-table-column prop="date" label="账户名称" width=""></el-table-column>
          <el-table-column prop="name" label="开户银行" width=""></el-table-column>
          <el-table-column prop="name" label="银行账号" width=""></el-table-column>
          <el-table-column label="操作" width="200">
            <template scope="scope">
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-dialog title="新增" :visible.sync="addAccountFormVisible">
          <el-form :model="form">
            <el-form-item label="账户名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="开户银行" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="银行账号" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addAccountFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addAccountFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        activeName: 'offline',
        addAccountFormVisible: false,
        formLabelWidth: '120px',
        loading: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
