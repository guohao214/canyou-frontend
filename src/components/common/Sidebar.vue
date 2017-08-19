<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title
              }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            icon: 'el-icon-menu',
            index: '4',
            title: '财务管理',
            subs: [
              {
                index: '/finance/balance',
                title: '我的资金'
              },
              {
                index: '/finance/withdrawDeposit',
                title: '提现管理'
              },
              {
                index: '/finance/account',
                title: '收款账户'
              },
              {
                index: '/finance/balanceList',
                title: '收支明细'
              },
              {
                index: '/finance/balanceConfirm',
                title: '收款确认'
              }
            ]
          },
          {
            icon: 'el-icon-menu',
            index: '5',
            title: '订单管理',
            subs: [
              {
                index: '/order/list',
                title: '列表'
              },
              {
                index: '/order/approval',
                title: '审核'
              },
            ]
          },
          {
            icon: 'el-icon-document',
            index: '/account',
            title: '账号管理',
          },

          {
            icon: 'el-icon-upload2',
            index: '6',
            title: '客户管理',
            subs: [
              {
                index: '/customer/list',
                title: '列表'
              },
              {
                index: '/customer/addClient',
                title: '添加客户'
              }
            ]
          },
          {
            icon: 'el-icon-setting',
            index: '/preferences',
            title: '参数设置'
          },
          {
            icon: 'el-icon-upload2',
            index: '7',
            title: '商品管理',
            subs: [
              {
                index: '/commodity/list',
                title: '列表'
              },
              {
                index: '/commodity/turnoverDetail',
                title: '出入库明细'
              },
              {
                index: '/commodity/add',
                title: '新增'
              },
              {
                index: '/commodity/putAway',
                title: '商品入库'
              },
              {
                index: '/commodity/appear',
                title: '商品出库'
              },
            ]
          },
          {
            icon: 'el-icon-upload2',
            index: '8',
            title: '仓库管理',
            subs: [
              {
                index: '/store/list',
                title: '列表'
              },
              {
                index: '/store/add',
                title: '新增'
              },
              {
                index: '/store/revise',
                title: '修改'
              }
            ]
          },
          {
            icon: 'el-icon-menu',
            index: '2',
            title: '例子',
            subs: [
              {
                index: '/basetable',
                title: '基础表格'
              },
              {
                index: '/vuetable',
                title: 'Vue表格组件'
              },
              {
                icon: 'el-icon-setting',
                index: '/readme',
                title: '自述'
              },
              {
                index: '/baseform',
                title: '基本表单'
              },
              {
                index: '/vueeditor',
                title: '编辑器'
              },
              {
                index: '/markdown',
                title: 'markdown'
              },
              {
                index: '/upload',
                title: '文件上传'
              },
              {
                index: '/basecharts',
                title: '图表'
              },
              {
                index: '/drag',
                title: '拖拽'
              }
            ]
          },
        ]
      }
    },
    computed: {
      onRoutes(){
        return this.$route.path.replace('/', '');
      }
    }
  }
</script>

<style scoped>

  .sidebar {
    display: block;
    position: absolute;
    width: 160px;
    left: 0;
    top: 45px;
    bottom: 0;
    background: #2E363F;
  }

  .sidebar > ul {
    height: 100%;
  }
</style>
