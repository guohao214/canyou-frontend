<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>客户管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加客户</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form ref="form" class="form" :inline="true" :model="form" label-width="80px">
      <!--公司信息-->
      <div class="title">
        <span>公司信息</span>
      </div>
      <el-form-item required  class="width50" label="客户名称">
        <el-input v-model="form.p" placeholder=""></el-input>
      </el-form-item>
      <el-form-item required class="width50" label="客户级别">
        <el-input v-model="form.pr" placeholder=""></el-input>
      </el-form-item>
      <el-form-item class="width50" label="签约时间">
        <div class="block">
          <el-date-picker
            v-model="form.value3"
            type="datetimerange"
            placeholder="选择时间范围">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item class="width50 both-more">
        <el-form-item  class="width50" label="邮编">
          <el-input v-model="form.p" placeholder=""></el-input>
        </el-form-item>
        <el-form-item  class="width50" label="传真">
          <el-input v-model="form.p" placeholder=""></el-input>
        </el-form-item>
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
      <!--个人信息-->
      <div class="title">
        <span>个人信息</span>
      </div>
      <el-form-item required class="width50" label="姓名">
        <el-input v-model="form.pr" placeholder=""></el-input>
      </el-form-item>
      <el-form-item class="width50 both-more">
        <el-form-item required  class="width50" label="手机">
          <el-input v-model="form.p" placeholder=""></el-input>
        </el-form-item>
        <el-form-item  class="width50" label="电话">
          <el-input v-model="form.p" placeholder=""></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item class="width50" label="职位">
          <el-input v-model="form.pr" placeholder=""></el-input>
      </el-form-item>
        <el-form-item class="width50 both-more">
          <el-form-item  class="width50" label="Email">
            <el-input v-model="form.p" placeholder=""></el-input>
          </el-form-item>
          <el-form-item  class="width50" label="QQ">
            <el-input v-model="form.p" placeholder=""></el-input>
          </el-form-item>
        </el-form-item>


      <div>
        账号信息
        <el-checkbox v-model="accountInfoChecked">开通订货账号</el-checkbox>
        （开通订货账号，客户才能进入易订货系统订货）
      </div>
      <el-form-item  class="width100" label="账户">
        <el-input v-model="form.p" placeholder=""></el-input>
      </el-form-item>
      <el-form-item  class="width100" label="密码">
        <el-input v-model="form.p" placeholder=""></el-input>
        <div class="possword-wrap">
          <span>弱</span>
          <span>中</span>
          <span>强</span>
        </div>
      </el-form-item>
      <el-form-item  class="width100" label="确认密码">
        <el-input v-model="form.p" placeholder=""></el-input>
      </el-form-item>
      </el-form-item>

      <div>
        财务信息
      </div>
      <el-form-item class="width50" label="发票抬头">
        <el-input v-model="form.pr" placeholder=""></el-input>
      </el-form-item>

      <el-form-item class="width50" label="纳税人识别号">
        <el-input v-model="form.p" placeholder=""></el-input>
      </el-form-item>
      <el-form-item class="width50" label="地址">
        <el-input v-model="form.pr" placeholder=""></el-input>
      </el-form-item>

      <el-form-item class="width50" label="电话">
        <el-input v-model="form.p" placeholder=""></el-input>
      </el-form-item>
      <el-form-item class="width50" label="开户名称">
        <el-input v-model="form.pr" placeholder=""></el-input>
      </el-form-item>
      <el-form-item class="width50" label="开户银行">
        <el-input v-model="form.p" placeholder=""></el-input>
      </el-form-item>
      <el-form-item class="width50" label="银行账号">
        <el-input v-model="form.p" placeholder=""></el-input>
      </el-form-item>
      <div class="btm">
        <el-button>保存</el-button>
        <el-button>取消</el-button>
      </div>
  </el-form>
  </div>
</template>

<style>
  .el-form--inline .el-form-item{
    float: left;
  }
  .width50 .el-form-item__label{
    width: 16% !important;
  }
 .width50{
    /*box-sizing：border-box;*/
 }
  .width100{
    width: 100%;
  }
  .width100 .el-form-item__label{
    width: 8%;
  }
  .width100 .el-form-item__content{
    width: 42%;
  }
  .possword-wrap span{
    display: inline-block;
    width: 20%;
    background: #cccccc;
    margin-right: 3px;
    /*height: 20px;*/
    margin: 11px 12px 11px 0;
    text-align: center;
    color: #ffffff;
  }
 .form{
   width: 100%;
 }
  .title{
   width: 100%;
    float: left;
  }
  .title span{
    width: 80px;
    text-align: center;
    line-height: 35px;
    padding-left: 12px;
  }
  .width25{
    width: 24%;
  }
  .width25 .el-input{
   width: 50%;
  }
  .width50.both-more .el-form-item__content{
    width: 100%;
  }
  .width50.both-more .el-form-item__content .el-form-item__content{
    width: 68%;
  }
  .width50.both-more .width50 .el-form-item__label{
    width: 32% !important;
  }
  .width50{
    width: 50%;
    margin-right: 0 !important;
  }
  .width50 .el-form-item__content{
    width: 84%;
  }
  .el-date-editor--datetimerange .el-input{
    width: 100%;
  }
  .el-date-editor.el-input{
    width: 100%;
  }
  .btm{
    width: 100%;
    float: left;
  }
</style>
<script>
  import index from './index.js'
  export default index
</script>
