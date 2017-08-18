/**
 * Created by ASUS on 2017/8/15.
 */
export default [
  {
    path: '/customer/list',
    component: resolve => require(['../components/pages/customer/list/index.vue'], resolve)
  },
  {
    path: '/customer/addClient',
    component: resolve => require(['../components/pages/customer/addClient/index.vue'], resolve)
  }
]
