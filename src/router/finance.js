/**
 * Created by GuoHao on 2017/8/14.
 */
export default [
  {
    path: '/finance/balance',
    component: resolve => require(['../components/pages/finance/balance/index.vue'], resolve)
  },
  {
    path: '/finance/withdrawDeposit',
    component: resolve => require(['../components/pages/finance/withdrawDeposit/index.vue'], resolve)
  },
  {
    path: '/finance/account',
    component: resolve => require(['../components/pages/finance/account/index.vue'], resolve)
  },
  {
    path: '/finance/balanceList',
    component: resolve => require(['../components/pages/finance/balanceList/index.vue'], resolve)
  },
  {
    path: '/finance/balanceConfirm',
    component: resolve => require(['../components/pages/finance/balanceConfirm/index.vue'], resolve)
  }
]
