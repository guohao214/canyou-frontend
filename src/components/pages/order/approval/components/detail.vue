<template>
  <div class="order-detail">
    <div class="bar">
      <span class="order-status">待审核订单</span>
      <span class="order-no">订单号：12222</span>
      <span class="customer-name">客户名称：张思</span>
    </div>
    <el-table
    :data="tableData6"
    border
    show-summary
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="amount1"
      sortable
      label="数值 1">
    </el-table-column>
    <el-table-column
      prop="amount2"
      sortable
      label="数值 2">
    </el-table-column>
    <el-table-column
      prop="amount3"
      sortable
      label="数值 3">
    </el-table-column>
  </el-table>
    <div class="footer-bar">
      <span class="label">
        <i class="el-icon-edit" @click="dialogFormVisible = true">&nbsp;&nbsp;运费：</i>
        <i>应付金额：</i>
      </span>
      <span class="value">
        <i>100.00</i>
        <i>30000.00</i>
      </span>
    </div>

    <el-dialog title="运费修改" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="运费金额：" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        formLabelWidth:'100px',
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
        tableData6: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .order-detail
    .bar
      line-height 30px
      font-size 13px
      span
        display inline-block
        margin 0 6px
        &.order-status
          font-size 16px
          color red
    .footer-bar
      text-align right
      span
        display inline-block
        margin 10px 0
        text-align right
        font-size 12px
        i
          font-style normal
          width 100px
          display block
          line-height 30px
        &.value
          vertical-align bottom
          i
            width auto
            text-align left
            &:last-child
              color red
              font-size 18px
</style>
