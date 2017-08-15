<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>客户管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加客户</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <span class="title">公司信息</span>
    <el-form ref="form" :inline="true" :model="form" label-width="80px">
      <el-form-item  class="width50" label="客户名称">
        <el-input v-model="form.p" placeholder=""></el-input>
      </el-form-item>
      <el-form-item class="width50" label="客户级别">
        <el-input v-model="form.pr" placeholder=""></el-input>
      </el-form-item>
      <el-form-item class="width50">
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="dataq"
            type="daterange"
            placeholder="选择日期范围">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item class="width50">
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="dataq"
            type="daterange"
            placeholder="选择日期范围">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item  class="width50" label="区域">
        <el-input v-model="form.p" placeholder=""></el-input>
      </el-form-item>
      <el-form-item class="width50" label="详细地址">
        <el-input v-model="form.pr" placeholder=""></el-input>
      </el-form-item>
      <el-form-item class="width50" label="物流编码">
        <el-input v-model="form.pr" placeholder=""></el-input>
      </el-form-item>
      <el-form-item class="width50" label="备用信息">
        <el-input v-model="form.pr" placeholder=""></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          p: '',
          pr: '',
          dataq:　''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style>
  .title{
    width: 80px;
    text-align: center;
    line-height: 35px;
    padding-left: 12px;
  }
  .width50{
    width: 49%;  }
  .width50 .el-form-item__content{
    width: 70%;
  }
</style>
