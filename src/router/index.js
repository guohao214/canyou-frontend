import Vue from 'vue';
import VueRouter from 'vue-router';

import routers from './routers';
import financeRouters from './finance';
import orderRouters from './order'
import loginRouters from './login';
import customerManagement from './customerManagement';
import storeManagement from  './storeManagement'

routers[0].children.push(...financeRouters)
routers[0].children.push(...orderRouters)
routers[0].children.push(...customerManagement)
routers[0].children.push(...storeManagement)
routers.push(...loginRouters)

Vue.use(VueRouter);

let router = new VueRouter({
  routes: routers
})


export default router
