
<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>列表</el-breadcrumb-item>
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
      <el-select v-model="value" placeholder="选择状态">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="select_word" placeholder="输入商品名称/编码" class="handle-input mr10"></el-input>
      <el-button type="primary" icon="search" @click="search">搜索</el-button>
      <div class="fl-r">
        <el-button type="primary" @click="addClientUrl">添加</el-button>
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%"
              ref="multipleTable"
              @selection-change="handleSelectionChange"
              v-loading="loading">
      <!--<el-table-column type="selection" width="55"></el-table-column>-->
      <el-table-column prop="name" label="商品图片" width="150">
        <template scope="scope">
          <img v-bind:src="name" alt="" width="60" height="60">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="商品编码" sortable width="120">
      </el-table-column>
      <el-table-column prop="name" label="商品名称" sortable>
      </el-table-column>
      <el-table-column prop="name" label="商品规格">
      </el-table-column>
      <el-table-column prop="name" label="单位">
      </el-table-column>
      <el-table-column prop="name" label="市场价" sortable>
      </el-table-column>
      <el-table-column prop="name" label="成本参考价">
      </el-table-column>
      <el-table-column prop="name" label="库存数量">
      </el-table-column>
      <el-table-column prop="name" label="预购">
      </el-table-column>
      <el-table-column prop="name" label="库存成本">
      </el-table-column>
      <el-table-column prop="name" label="状态">
      </el-table-column>
      <el-table-column prop="name" label="新增时间">
      </el-table-column>
      <el-table-column prop="name" label="修改时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template scope="scope">
          <el-button type="text" size="small">修改</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
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

        loading: false,
        url: './static/vuetable.json',
        tableData: [],
        cur_page: 1,
        multipleSelection: [],
        //select_cate: '',
        select_word: '',
        del_list: [],
        is_search: false,
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
        this.$router.push('/commodity/add')
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

