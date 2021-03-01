<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">User1</router-link>
    <router-link to="/users/2">User2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>

    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja&page=2'">次のユーザー</router-link>

    <router-view />
    <div style="height: 700px;"></div>

    <router-link id="next-user"
                 :to="{ name: 'users-id-profile',
                        params: { id: Number(id) + 1 },
                        query: { lang: 'ja', page: 2},
                        hash: '#next-user'}">次のユーザー</router-link>
  </div>
</template>

<script>
export default {
  created() {
    console.log('created');
  },
  props: ['id'],
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');

    next(vm => {
      console.log(vm.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    next();
  }, beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');

    const isLeave = window.confirm('本当にこのページを離れますか？');
    if (isLeave) {
      next();

    } else {
      next(false);
    }

  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
      console.log('$router が変わった');
    }
  }
}
</script>