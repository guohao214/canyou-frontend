<template>
  <div class="order-detail">
    <div class="header-bar">
      <div>
        <span class="order-no">订单号：12222</span>

      </div>
      <div>
          <span class="">订单金额：1000.00</span>
          <span class="">已付款：345.90</span>
          <span class="">待确认：332.81</span>
          <span class="">待支付：229.00</span>
      </div>
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
    .header-bar
      font-size 13px
      margin-bottom 15px
      div
        line-height 30px
        span
          display inline-block
          margin 0 6px
</style>
