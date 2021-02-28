import Vue from 'vue';
import Router from 'vue-router';

// import Home from './views/Home.vue';
// import Users from './views/Users.vue';
// import UsersPosts from './views/UsersPosts.vue';
// import UsersProfile from './views/UsersProfile.vue';
// import HeaderHome from './views/HeaderHome.vue';
// import HeaderUsers from './views/HeaderUsers.vue';

// 動的 import for webpack (遅延 loading)
// header 要素に link 要素が生成される (prefetch = vue cli3 は全部取ってくる)
const Home = () => import(/* webpackChunkName: "Home" */ './views/Home.vue');
const Users = () => import(/* webpackChunkName: "Users" */ './views/Users.vue');
const UsersPosts = () => import(/* webpackChunkName: "UsersPosts" */ './views/UsersPosts.vue');
const UsersProfile = () => import(/* webpackChunkName: "UsersProfile" */ './views/UsersProfile.vue');
const HeaderHome = () => import(/* webpackChunkName: "HeaderHome" */ './views/HeaderHome.vue');
const HeaderUsers = () => import(/* webpackChunkName: "HeaderUsers" */ './views/HeaderUsers.vue');

// plugin を使うお作法
Vue.use(Router);

export default new Router({
  mode: 'history',  // default は hash (url に # でるやつ)
  // url と component を mapping するお！
  routes: [
    // { path: '/', component: Home },
    {
      path: '/',
      components: {
        default: Home,
        header: HeaderHome
      },
      // ナビゲーションガード
      // beforeEnter(to, from, next) {
      //   next(false);
      // }
    },
    // :id は動的 url
    // props: true で :id を props で渡せる
    {
      path: '/users/:id',
      // component: Users,
      components: {
        default: Users,
        header: HeaderUsers
      },
      props: {
        default: true,
        header: false
      },
      children: [
        {
          path: 'posts',
          component: UsersPosts
        },
        {
          path: 'profile',
          component: UsersProfile,
          name: 'users-id-profile'
        }
      ]
    },
    {
      path: '/hello',
      // redirect: '/'
      redirect: {
        path: '/'
      }
    },
    {
      path: '*',
      redirect: {
        path: '/'
      }
    }
  ],
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior(to, savedPosition) {
    // transition つかうとき ▼
    return new Promise(resolve => {
      // this.app === this.app.$root
      this.app.$root.$once('triggerScroll', () => {
        let position = { x: 0, y: 0 };
        if (savedPosition) {
          position = savedPosition;
        }

        if (to.hash) {
          position = {
            selector: to.hash
          };
        }

        resolve(position);
      });
    });

    // transition 使わないとき ▼
    // if (savedPosition) {
    //   // 戻るボタンで戻った際に、前回表示箇所にスクロール
    //   return savedPosition;
    // }

    // // console.log('scroll behavior');

    // if (to.hash) {
    //   return {
    //     // selector: '#next-user',
    //     selector: to.hash,
    //     offset: {
    //       x: 0,
    //       y: 100
    //     }
    //   };
    // }

    // return {
    //   x: 0,
    //   y: 0
    // };
  }
});