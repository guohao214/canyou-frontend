<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <span style="color: #333;font-size: 18px;margin-bottom: 40px;display: inline-block">是否开具发票</span>
      <el-form-item label="">
        <el-radio-group v-model="form.resource">
          <el-radio label="不支持"></el-radio>
          <el-radio label="只支持"></el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="clearFix" style="margin: 0 50px 20px 80px;">
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          type="primary"
          style="margin: 10px;float: left"
        >
          {{tag.name}}
        </el-tag>
        <div style="width: 200px;float: left">
          <el-input placeholder="输入其设置的选项" v-model="input4">
            <template slot="append">添加</template>
          </el-input>
        </div>
      </div>
      <span style="width:100%;margin-top:30px;color: #333;font-size: 18px;margin-bottom: 40px;display: inline-block">库存不足是否可以下单</span>
      <el-form-item label="">
        <el-radio-group v-model="form.resource">
          <el-radio label="可以"></el-radio>
          <el-radio label="不可以"></el-radio>
        </el-radio-group>
      </el-form-item>
      <!--<el-form-item>-->
        <!--<el-button type="primary" @click="onSubmit">立即创建</el-button>-->
        <!--<el-button>取消</el-button>-->
      <!--</el-form-item>-->
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
          desc: ''
        },
        tags: [
          { name: '不开具发票'},
          { name: '普票'},
        ]
      }

    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

