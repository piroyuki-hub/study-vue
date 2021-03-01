# study-vue
study vue.js repo.

# vue cli

> create project

```
vue create vue-router
```

> exec serve

```
yarn serve
```

# vue router

> install vue-router

```
cd { project }
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

> modify @src/main.js (for vue router)

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

> modify @src/App.vue

```html
<template>
  <div>
    <router-view />
  </div>
</template>
```

# vuex

> install vuex

```
cd { project }
yarn add vuex
```

> create store.js @src

```
cd src
touch store.js
```

* store.js

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2
  }
});
```
> modify @src/main.js (for vuex)

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';  // add

Vue.config.productionTip = false

new Vue({
  router,
  store,  // add
  render: h => h(App),
}).$mount('#app')
```
> modify @src/views/Home.vue

```javascript
<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Users のページに行く</button>
    <p>{{ count }}</p>  <!-- add -->
  </div>
</template>

<script>
export default {
  // add
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    toUsers() {
      this.$router.push({
        name: 'users-id-profile',
        params: { id: 1 }
      });
    }
  }
}
</script>
```
