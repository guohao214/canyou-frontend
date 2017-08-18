/**
 * Created by ASUS on 2017/8/17.
 */
export default [
  {
    path: '/store/list',
    component: resolve => require(['../components/pages/store/list/index.vue'], resolve)
  },
  {
    path: '/store/add',
    component: resolve => require(['../components/pages/store/add/index.vue'], resolve)
  },
  {
    path: '/store/revise',
    component: resolve => require(['../components/pages/store/revise/index.vue'], resolve)
  }
]
