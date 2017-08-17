<template>
  <el-table
    :data="tableData"
    style="width: 100%">
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
    <el-table-column
      prop="address"
      label="操作"
    >
      <template scope="scope">
        <el-popover
          ref="popover5"
          placement="top"
          width="160"
          v-model="deleteVisible">
          <p>这是一段内容这是一段内容确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="deleteVisible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="deleteVisible = false">确定</el-button>
          </div>
        </el-popover>
        <el-button >修改</el-button>
        <el-button @click="handleDelete(scope.$index, scope.row)" v-popover:popover5  type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        deleteVisible: false,
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
        }]
      }
    },
    methods : {
      handleDelete(index, row) {
        console.log(index, row);
        this.deleteVisible = true
      }
    }
  }
</script>
