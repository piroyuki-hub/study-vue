# study-vue
study vue.js repo.


# vue router

## : initial

> create project

```
vue create vue-router
```

> install vue-router

```
cd vue-router
yarn add vue-router
```

> create router.js @src

```
cd src
touch router.js
```

* router.js

```javascript
import Vue from 'vue';
import Router from 'vue-router';

// view component
import Home from './views/Home.vue';
import Users from './views/Users.vue';

// use plugin
Vue.use(Router);

export default new Router({
  // mapping: url & component
  routes: [
    {path: '/', component: Home},
    {path: '/users', component: Users},
  ]
});
```

> create components @src/views

```
mkdir views
touch { component }
```

* Home.vue

```html
<template>
  <div>
    <h3>Home</h3>
  </div>
</template>
```

* Uses.vue

```html
<template>
  <div>
    <h3>Users</h3>
  </div>
</template>
```

> modify src/main.js (for vue router)

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router';  // add

Vue.config.productionTip = false

new Vue({
  router: router,  // add
  render: h => h(App),
}).$mount('#app')
```

> modify src/App.vue

```html
<template>
  <div>
    <router-view />
  </div>
</template>
```

> exec serve

```
yarn serve
```

