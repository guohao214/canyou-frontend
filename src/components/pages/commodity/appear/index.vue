
<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品出库</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="handle-box">
      <el-select v-model="value" placeholder="选择分类">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-date-picker
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </div>
    <el-table :data="tableData" border style="width: 100%"
              ref="multipleTable"
              @selection-change="handleSelectionChange"
              v-loading="loading">
      <el-table-column type="index" label="" width="55"></el-table-column>
      <el-table-column prop="name" label="商品编码" sortable width="120">
      </el-table-column>
      <el-table-column prop="name" label="商品名称">
      </el-table-column>
      <el-table-column prop="name" label="规格">
      </el-table-column>
      <el-table-column prop="name" label="入库数量">
        <template scope="scope">
          <el-input v-model="scope.row.name" placeholder=""></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="备注"
        width="100"
        algin="center"
        show-overflow-tooltip
        align="center"
      >
        <template scope="scope">
          <el-button style="text-align: center;font-size: 20px;color: #000"
                     type="text" @click="dialogVisible = true" size="small">+</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="10"
        layout="prev, pager, next"
        :total="1000"
        >
      </el-pagination>
    </div>

    <el-form ref="form" :model="form" label-width="80px">
     <div class="clearFix">
       <div style="width: 35%;float: left">
         <el-form-item label="入库单号" required>
           <el-input v-model="form.name" required></el-input>
         </el-form-item>
         <el-form-item label="入库类型" required>
           <el-input v-model="form.name"></el-input>
         </el-form-item>
         <el-form-item label="经办人">
           <el-input v-model="form.name"></el-input>
         </el-form-item>
       </div>
       <div style="width: 35%;float: left;">
         <el-form-item label="备注">
           <el-input
             type="textarea"
             :rows="2"
             placeholder="请输入内容"
             v-model="name"
             size="large"
           >
           </el-input>
         </el-form-item>
         <el-form-item label="制作人" >
           <el-input :disabled="true" v-model="form.name"></el-input>
         </el-form-item>
       </div>
     </div>
      <div class="btm">
        <el-button type="primary" @click="submitForm('form')">保存</el-button>
        <el-button>取消</el-button>
      </div>
    </el-form>
    <!--dialog-->
    <el-dialog
      title="备注"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="value3">
      </el-input>

      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value3:'',
        loading: false,
        url: './static/vuetable.json',
        tableData: [],
        cur_page: 1,
        multipleSelection: [],
        //select_cate: '',
        select_word: '',
        del_list: [],
        is_search: false,
        dialogVisible: false,
        form: {
            name : "琉璃"
        }
      }
    },
    created(){
      this.getData();
    },
    computed: {
      data(){
        const self = this;
        return self.tableData.filter(function (d) {
          let is_del = false;
          for (let i = 0; i < self.del_list.length; i++) {
            if (d.name === self.del_list[i].name) {
              is_del = true;
              break;
            }
          }
          if (!is_del) {
            if ((d.name.indexOf(self.select_word) > -1)) {
              return d;
            }
          }
        })
      }
    },
    methods: {
      handleCurrentChange(val){
        this.cur_page = val;
        this.getData();
      },
      getData(){
        this.loading = true;
        let self = this;
        if (process.env.NODE_ENV === 'development') {
          self.url = '/ms/table/list';
        }
        ;
        self.$request.post(self.url, {page: self.cur_page}).then((res) => {
          self.tableData = res.list;
          self.loading = false;
        }).catch(function (err) {
          self.loading = false;
          console.log(err)
        })
      },
      search(){
        this.is_search = true;
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      ddd(){
        const self = this,
          length = self.multipleSelection.length;
        let str = '';
        console.log(JSON.stringify(self.multipleSelection))
        //self.del_list = self.del_list.concat(self.multipleSelection);
//        for (let i = 0; i < length; i++) {
//          str += self.multipleSelection[i].name + ' ';
//        }
//        self.$message.error('删除了' + str);
//        self.multipleSelection = [];
        console.log(self.multipleSelection)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      addClientUrl () {
        this.$router.push('/commodity/add')
      },
      handleCommand(command) {
          this.handleCurrentChange()
        this.$message('click on item ' + command);
      },
      handleClose(done) {
          alert(6)
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style scoped>
  .handle-box{
    margin-bottom: 22px;
  }
  .clearFix:after{
    clear:both;
    display:block;
    visibility:hidden;
    height:0;
    line-height:0;
    content:'';

  }
  .clearFix{
    zoom:1;
    clear: both;
  }
.el-textarea textarea{
  height: 98px;
}
</style>

