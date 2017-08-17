<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      v-loading="loading"
    >
      <el-table-column
        prop="date"
        label="仓库名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="仓库编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="仓库地址">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button size="small">修改</el-button>
          <el-button size="small" type="danger"  @click="dialogVisible = true">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
        <span>确认删除？</span>
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
        currentPage:1,
        dialogVisible: false,
        loading: false,
        url: './static/vuetable.json',
        tableData: [],
        cur_page: 1,
        multipleSelection: [],
        //select_cate: '',
        select_word: '',
        del_list: [],
        is_search: false
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
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
        this.$router.push('/addClient')
      },
      handleCommand(command) {
        this.handleCurrentChange()
        this.$message('click on item ' + command);
      },
      handleClose(done) {
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
  .handle-box {
    margin-bottom: 20px;
  }

  .handle-select {
    width: 120px;
  }

  .handle-input {
    width: 300px;
    display: inline-block;
  }
  .fl-r{
    float: right;
  }
</style>
