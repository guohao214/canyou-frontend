import Vue from 'vue';
import VueRouter from 'vue-router';

import routers from './routers';
import financeRouters from './finance';
import orderRouters from './order'
import loginRouters from './login';
import customerRouters from './customer';
import storeRouters from  './store';
import commodityRouter from './commodity';

routers[0].children.push(...financeRouters)
routers[0].children.push(...orderRouters)
routers[0].children.push(...customerRouters)
routers[0].children.push(...storeRouters)
routers[0].children.push(...commodityRouter)

routers.push(...loginRouters)

Vue.use(VueRouter);

let router = new VueRouter({
  routes: routers
})


export default router
