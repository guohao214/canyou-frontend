<template>
  <div class="order-cash">
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
      <div class="right">
        <el-button type="success" @click="dialogFormVisible=true">添加收款记录</el-button>
      </div>
    </div>

    <el-table
      :data="tableData6"
      border>
      <el-table-column
        prop="id"
        label="支付流水号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="付款金额">
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="支付方式">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="收款账户">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="状态">
      </el-table-column>
    </el-table>

    <!--收款记录-->
    <el-dialog title="收款记录" :visible.sync="dialogFormVisible" size="large">
      <div class="wrap">
        <div class="left">
          <el-form :model="form">
            <el-form-item label="付款金额：" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="付款日期：" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="收款账号：" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="right">
          <el-form :model="form">
            <el-form-item label="备注信息：" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off" type="textarea" :rows="4"></el-input>
            </el-form-item>
            <el-form-item label="附件：" :label-width="formLabelWidth">
              <el-upload
                class="order-cash-upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">建议上传订单付款凭证，如汇款单等；
                  附件支持JPG\PNG\Word\Excel\Txt格式，大小不超过4M</div>
              </el-upload>
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

<style lang="stylus">
  .order-cash-upload
    .el-upload--text
      border:none;
      width auto
      height auto
    .el-form-item__content
      line-height 20px
</style>

<style lang="stylus" scoped>
  .order-cash
    .header-bar
      font-size 13px
      margin-bottom 15px
      position relative
      div
        line-height 30px
        span
          display inline-block
          margin 0 6px
        &.right
          position absolute
          right 10px
          top 10px
    .wrap
      display flex
      div
        &.left
        &.right
          flex-basis 50%
</style>
