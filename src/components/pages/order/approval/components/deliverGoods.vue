<template>
  <div class="order-detail">
    <div class="header-bar">
      <div>
        <span class="order-status">待审核订单</span>
        <span class="">订单号：12222</span>
        <span class="">客户名称：张思</span>
      </div>
      <div>
        <span>
          收货信息： 公司地址， 张思， 13389990999
        </span>
      </div>
    </div>
    <el-button @click="dialogFormVisible=true">发货</el-button>
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

    <el-dialog title="发货信息" :visible.sync="dialogFormVisible" size="large">
      <div class="wrap">
        <div class="left">
          <el-form :model="form">
            <el-form-item label="发货日期：" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="物流公司：" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="物流单号：" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="right">
          <el-form :model="form">
            <el-form-item label="备注信息：" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off" type="textarea" rows="6"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>

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
    .header-bar
      font-size 13px
      background-color #fff9ef
      padding 20px
      margin-bottom 15px
      div
        line-height 30px
        span
          display inline-block
          margin 0 6px
          &.order-status
            font-size 16px
            color red
    .wrap
      display flex
      div
        flex-basis 50%

</style>
