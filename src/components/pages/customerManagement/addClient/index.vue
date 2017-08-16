<template>
  <div id="addClientWrap">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>客户管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加客户</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form ref="form" class="form" :inline="true" :model="form" label-width="80px">
      <!--公司信息-->
     <div class="clearFix">
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
     </div>
      <!--个人信息-->
      <div class="clearFix">
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
      </div>

      <div class="clearFix">
        <div class="account-infor-wrap">
          <span class="bl">账号信息</span>
          <el-checkbox v-model="accountInfoChecked">开通订货账号</el-checkbox>
          <spab class="bl-title">（开通订货账号，客户才能进入易订货系统订货）</spab>
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
      </div>

      <div class="clearFix">
        <div class="title">
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
      </div>
      <div class="btm">
        <el-button>保存</el-button>
        <el-button>取消</el-button>
      </div>
  </el-form>
  </div>
</template>
<style lang="stylus">
  @import "./index.styl"
</style>
<script>
  import index from './index.js'
  export default index
</script>
