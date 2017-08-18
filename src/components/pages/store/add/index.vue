<template>
  <div id="storeManagementAdd">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item> 仓库管理</el-breadcrumb-item>
        <el-breadcrumb-item> 新增</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="storeName">
        <el-input v-model="ruleForm.storeName"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" prop="storeNumber">
        <el-input v-model="ruleForm.storeNumber"></el-input>
      </el-form-item>
      <el-form-item label="是否是餐友仓库" prop="resource">
        <el-radio-group v-model="ruleForm.resource" @change="selectType">
          <el-radio style="padding-left: 30px" :label="1">线上品牌商赞助</el-radio>
          <el-radio style="padding-left: 30px" :label="2">线下场地免费</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-show="!ifResource" label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item v-show="ifResource" label="请选择餐友仓库" prop="friendStore">
        <el-select v-model="friendStore" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        friendStore: '',
        ifResource:　false,
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
        ruleForm: {
          storeName: '',
          storeNumber: '',
          resource: 1
        },
        rules: {
          storeName: [
            { required: true, message: '请输入仓库名称', trigger: 'blur' },
          ],
          storeNumber: [
            { required: true, message: '请输入仓库编号', trigger: 'blur' },
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      selectType(){
          console.log(this.ruleForm.resource)
        if(this.ruleForm.resource == 2){
              this.ifResource = true
        }else {
          this.ifResource = false
        }
      }
    }
  }
</script>
<style lang="stylus">
  form{
    padding: 41px;
  }
  #storeManagementAdd label{
    width : 130px !important;
  }
  #storeManagementAdd .el-form-item__content{
    width :500px !important;
    margin-left :130px !important;
  }
</style>
