import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

// ナビゲーションガード (java fillter 的な？)
// router.beforeEach((to, from, next) => {
//   // console.log('global-beforeEach');
//   if (to.path === '/users/1') {
//     next('/');
//   }

//   next();  // 必須 (param に false でページ遷移なし / path も設定できる)
// });


// $root がこれ
new Vue({
  router: router,  // router.js で Vue.use(Router); することで router 使えるようになる
  render: h => h(App),
}).$mount('#app')
