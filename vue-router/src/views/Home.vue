<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Users のページに行く</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      // this.$router.push('users');
      // this.$router.push({ path: 'users' });
      this.$router.push({
        name: 'users-id-profile',
        params: { id: 1 }
      });
    }
  }
}
</script>