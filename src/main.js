import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//插件
import toast from './components/common/toast'

//减少移动端300ms点击延迟
import Fastclick from 'fastclick'

//图片懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)

//减少移动端300ms点击延迟
Fastclick.attach(document.body)


Vue.use(VueLazyLoad,{
  //require引入本地模块
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
