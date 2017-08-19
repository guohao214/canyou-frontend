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
  {
    path: '/commodity/putAway',
    component: resolve => require(['../components/pages/commodity/putAway/index.vue'], resolve)
  },
  {
    path: '/commodity/add',
    component: resolve => require(['../components/pages/commodity/add/index.vue'], resolve)
  },
  {
    path: '/commodity/appear',
    component: resolve => require(['../components/pages/commodity/appear/index.vue'], resolve)
  }
]
