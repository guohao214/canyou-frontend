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
  }
]
