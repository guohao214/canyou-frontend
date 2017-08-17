<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item> 客户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="handle-box">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">黄金糕</el-dropdown-item>
          <el-dropdown-item command="b">狮子头</el-dropdown-item>
          <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
          <el-dropdown-item command="d">双皮奶</el-dropdown-item>
          <el-dropdown-item command="e">蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-input v-model="select_word" placeholder="请输入客户名称/编码/订货账号/联系人/手机" class="handle-input mr10"></el-input>
      <el-button type="primary" icon="search" @click="search">搜索</el-button>
      <div class="fl-r">
        <el-button @click="ddd">导入</el-button>
        <el-button>导出</el-button>
        <el-button type="primary" @click="addClientUrl">新增</el-button>
      </div>
    </div>
    <el-table :data="data" border style="width: 100%"
              ref="multipleTable"
              @selection-change="handleSelectionChange"
              v-loading="loading">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="客户名称" sortable width="150">
      </el-table-column>
      <el-table-column prop="name" label="客户编码" width="120">
      </el-table-column>
      <el-table-column prop="name" label="登录账号">
      </el-table-column>
      <el-table-column prop="name" label="地区">
      </el-table-column>
      <el-table-column prop="name" label="级别" sortable>
      </el-table-column>
      <el-table-column prop="name" label="联系方式">
      </el-table-column>
      <el-table-column prop="name" label="创建人">
      </el-table-column>
      <el-table-column prop="name" label="状态" sortable>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[30, 60, 120, 240]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="240">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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

