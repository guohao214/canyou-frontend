<template>
  <div id="commodityAdd">
    <el-form ref="form" :model="form" label-width="80px">
      <div class="clearFix" style="width: 90%;margin: 0 auto;">
        <div class="baseInfoRule">
          <span class="title">基本信息</span>
          <template>
            <el-radio class="form.radio" v-model="radio" label="1">备选项</el-radio>
          </template>
        </div>
        <el-form-item label="商品名称" required class="width50 fl-l">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="排序值" class="width50 fl-l">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品分类" required class="width50 fl-l">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品重量" class="width50 fl-l">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="计量单位" required class="width50 fl-l">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品体积" class="width50 fl-l">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="搜索关键字" class="width50 fl-l">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="起订量" class="width50 fl-l">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </div>
      <div class="clearFix" style="width: 90%;margin: 0 auto;">
        <div class="baseInfoRule">
          <span class="title">商品规格</span>
          <template>
            <el-radio class="form.radio" v-model="radio" label="1">设置商品多规格</el-radio>
          </template>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%">
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
          <el-table-column
            prop="name"
            label="规格"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="商品编码">
            <template scope="scope">
              <el-input v-model="form.name"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="clearFix" style="width: 90%;margin: 0 auto;">
        <div class="baseInfoRule">
          <span class="title">商品图片</span>
        </div>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
      </div>
      <div class="clearFix" style="width: 90%;margin: 0 auto;">
        <div class="baseInfoRule">
          <span class="title">出库设置</span>
        </div>
        <div>
          <div style="width: 100%;margin-bottom: 15px;">
            <template>
                <el-checkbox v-model="form.checked"></el-checkbox>
            </template>
            <span style="padding-left: 35px;">
              安徽省
            </span>
            <el-select v-model="value" placeholder="请选择" style="width: 200px;padding-left: 50px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="width: 100%;margin-bottom: 15px;">
            <template>
              <el-checkbox v-model="form.checked"></el-checkbox>
            </template>
            <span style="padding-left: 35px;">
              安徽省
            </span>
            <el-select v-model="value" placeholder="请选择" style="width: 200px;padding-left: 50px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="width: 100%;margin-bottom: 15px;">
            <template>
              <el-checkbox v-model="form.checked"></el-checkbox>
            </template>
            <span style="padding-left: 35px;">
              安徽省
            </span>
            <el-select v-model="value" placeholder="请选择" style="width: 200px;padding-left: 50px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="clearFix" style="width: 90%;margin: 0 auto;">
        <div class="baseInfoRule">
          <span class="title">商品描述</span>
        </div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </div>
      <div class="clearFix" style="width: 90%;margin: 0 auto;">
        <div class="baseInfoRule">
          <span class="title">单价设置</span>
        </div>
        <div>
          <div>
            <el-form-item label="市场价" class="width50 fl-l">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="参考成本价" class="width50 fl-l">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <el-dialog v-model="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
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
          radio:'1',
          checked: true
        },
        dialogImageUrl: '',
        dialogVisible: false,
        textarea:''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
<style>
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
  } /*解决ie6/7兼容问题*/
#commodityAdd .width50{
  width: 50%;
}
  #commodityAdd .fl-l{
    float: left;
  }
  #commodityAdd .baseInfoRule{
    width: 100%;
    float: left;
    margin: 30px 0 35px 0;
  }
  #commodityAdd .baseInfoRule span.title{
    font-size: 18px;
    color: #000000;
    padding-right: 50px;
  }
  #commodityAdd .el-form-item__label{
    width: 16% !important;
  }
  #commodityAdd .el-select{
    width: 100%;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
