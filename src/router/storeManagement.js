/**
 * Created by ASUS on 2017/8/17.
 */
export default [
  {
    path: '/storeManagement/list',
    component: resolve => require(['../components/pages/storeManagement/list/index.vue'], resolve)
  },
  {
    path: '/storeManagement/add',
    component: resolve => require(['../components/pages/storeManagement/add/index.vue'], resolve)
  },
  {
    path: '/storeManagement/revise',
    component: resolve => require(['../components/pages/storeManagement/revise/index.vue'], resolve)
  }
]
