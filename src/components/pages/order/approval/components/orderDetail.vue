<template>
  <div class="order-detail">
    <div class="header-bar">
      <span class="order-status">待审核订单</span>
      <span class="">订单号：12222</span>
      <span class="">客户名称：张思</span>
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
      prop="mainPic"
      label="主图">
      <template scope="scope">
        <img v-bind:src="scope.row.mainPic" alt="" width="60" height="60">
      </template>
    </el-table-column>
    <el-table-column
      prop="amount1"
      label="商品编码">
    </el-table-column>
    <el-table-column
      prop="amount2"
      label="商品名称">
    </el-table-column>
    <el-table-column
      prop="amount3"
      label="规格">
    </el-table-column>
    <el-table-column
      prop="nums"
      label="数量">
      <template scope="scope">
        <el-input :value="scope.row.nums" v-if="isEdit"></el-input>
        <label v-else>{{ scope.row.nums }}</label>
      </template>
    </el-table-column>
    <el-table-column
      prop="amount3"
      label="单位">
    </el-table-column>
    <el-table-column
      prop="amount3"
      label="商品参数">
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价">
      <template scope="scope">
        <el-input :value="scope.row.price" v-if="isEdit"></el-input>
        <label v-else>{{ scope.row.price }}</label>
      </template>
    </el-table-column>
    <el-table-column
      prop="amount3"
      label="重量小计">
    </el-table-column>
    <el-table-column
      prop="amount3"
      label="金额小计">
    </el-table-column>
    <el-table-column
      prop="amount3"
      width="80px"
      label="备注">
      <template scope="scope">
        <i class="el-icon-plus" @click="dialogRemarksVisible=true"></i>
      </template>
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

    <!--操作日记-->
    <el-button type="text">操作日记 <i class="el-icon-arrow-up"></i></el-button>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="公司名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="操作类别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作日志">
      </el-table-column>
    </el-table>

    <!--运费修改-->
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

    <!--商品备注-->
    <el-dialog title="商品备注" :visible.sync="dialogRemarksVisible">
      <el-form :model="form">
          <el-input v-model="form.name" auto-complete="off" type="textarea" size="large" rows="6"></el-input>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogRemarksVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogRemarksVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props: ['isEdit'],
    data() {
      return {
        dialogFormVisible: false,
        dialogRemarksVisible: false,
        formLabelWidth:'100px',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
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
          mainPic: 'https://i.h2.pdim.gs/b2a97149ec43dfc95eb177508af29f6c.png',
          nums: 10,
          price: 122,
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
