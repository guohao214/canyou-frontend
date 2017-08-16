export default [
  {
    path: '/order/list',
    component: resolve => require(['../components/pages/order/list/index.vue'], resolve)
  },
  {
    path: '/order/approval',
    component: resolve => require(['../components/pages/order/approval/index.vue'], resolve)
  },
]
