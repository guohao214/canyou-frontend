/**
 * Created by GuoHao on 2017/8/14.
 */
export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: resolve => require(['../components/pages/Login.vue'], resolve)
  }
]
