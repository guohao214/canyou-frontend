import Vue from 'vue';
import VueRouter from 'vue-router';

import routers from './routers'
import financeRouters from './finance'
import loginRouters from './login'

routers[0].children.push(...financeRouters)
routers.push(...loginRouters)

Vue.use(VueRouter);

let router = new VueRouter({
  routes: routers
})


export default router
