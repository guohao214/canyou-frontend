/**
 * Created by ASUS on 2017/8/18.
 */
export default [
  {
    path: '/commodity/list',
    component: resolve => require(['../components/pages/commodity/list/index.vue'], resolve)
  },
  {
    path: '/commodity/turnoverDetail',
    component: resolve => require(['../components/pages/commodity/turnoverDetail/index.vue'], resolve)
  },
  // {
  //   path: '/commodity/revise',
  //   component: resolve => require(['../components/pages/commodity/revise/index.vue'], resolve)
  // }
]
