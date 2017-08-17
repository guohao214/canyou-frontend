/**
 * Created by ASUS on 2017/8/15.
 */
export default [
  {
    path: '/customerManagement/list',
    component: resolve => require(['../components/pages/customerManagement/list/index.vue'], resolve)
  },
  {
    path: '/customerManagement/addClient',
    component: resolve => require(['../components/pages/customerManagement/addClient/index.vue'], resolve)
  }
]
