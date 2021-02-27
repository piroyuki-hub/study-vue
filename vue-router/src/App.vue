<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <!-- <nav style="width: 700px; margin: auto; padding-top: 50px;"> -->
      <!--
        tag 属性で a タグ以外にもできる
        active-class 属性は to 属性の値を見て判断
        厳格に to 属性の値を判定したい場合は exact 属性を付与
      -->
      <!-- <router-link to="/"
                   active-class="link--active"
                   exact
                   class="link">Home</router-link>
      <router-link to="/users"
                   active-class="link--active"
                   exact
                   class="link">Users</router-link>
    </nav> -->
    <!-- [ 名前付き view ] Headerxxx.vue に委譲 -->
    <router-view name="header" />
    <transition
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter">
      <router-view />
    </transition>

    <!--
      router-view はネストできない
      router-view は component に置き換わる (置き換わった先の component 内に router-view はかけない)
      が、これは置き換わった時の話であり、component を個別で指定し、その中で router-view は書ける
    -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter() {
      // dom が load されたタイミングで実施
      this.$root.$emit('triggerScroll');
    }
  }
}
</script>

<style scoped>
/* .link {
  margin-right: 10px;
}

.link--active {
  font-size: 20px;
} */

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>