import Vue from 'vue';
import App from './App';
import router from './router';
import Request from './plugin/request/index.js'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';    // 默认主题
import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";

Vue.use(ElementUI);
Vue.use(Request)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
