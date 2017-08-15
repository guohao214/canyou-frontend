export default {
  data() {
    return {
      loading: false,
      url: './static/vuetable.json',
      tableData: [],
      cur_page: 1,
      multipleSelection: [],
      select_cate: '',
      select_word: '',
      del_list: [],
      is_search: false,
      value3:'',
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
      value: ''
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
          if (d.address.indexOf(self.select_cate) > -1 &&
            (d.name.indexOf(self.select_word) > -1 ||
            d.address.indexOf(self.select_word) > -1)
          ) {
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
    handleEdit(index, row) {
      this.$message('编辑第' + (index + 1) + '行');
    },
    handleDelete(index, row) {
      this.$message.error('删除第' + (index + 1) + '行');
    },
    delAll(){
      const self = this,
        length = self.multipleSelection.length;
      let str = '';
      self.del_list = self.del_list.concat(self.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += self.multipleSelection[i].name + ' ';
      }
      self.$message.error('删除了' + str);
      self.multipleSelection = [];
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
