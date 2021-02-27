<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">User1</router-link>
    <router-link to="/users/2">User2</router-link>
    <hr>
    <!-- <h1>User No. {{ $route.params.id }}</h1> -->
    <h1>User No. {{ id }}</h1>

    <!-- v-bind で動的に -->
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja&page=2'">次のユーザー</router-link>

    <router-view />
    <div style="height: 700px;"></div>

    <!-- vue router では # ハッシュはデフォルトでは動作しない -->
    <router-link id="next-user"
                 :to="{ name: 'users-id-profile',
                        params: { id: Number(id) + 1 },
                        query: { lang: 'ja', page: 2},
                        hash: '#next-user'}">次のユーザー</router-link>
  </div>
</template>

<script>
export default {
  // ライフサイクルイベントは 1 度しか呼ばれない (instance が使い回される)
  created() {
    console.log('created');
  },
  props: ['id'],
  // component 内にナビゲーションガードを設定
  // component が表示されるとき
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');

    // this が表示前だと使えないので、非同期的な処理で表示されたタイミングで処理が実施出来るように書く
    next(vm => {
      console.log(vm.id);
    });
  },
  // watch と似たようなことするとき
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    next();
  },
  // ページを離れるとき
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');

    const isLeave = window.confirm('本当にこのページを離れますか？');
    if (isLeave) {
      next();

    } else {
      next(false);
    }
  },
  watch: {
    // watcher で変化を監視できる
    $route(to, from) {
      console.log(to);
      console.log(from);
      console.log('$router が変わった');
    }
  }
}
</script>