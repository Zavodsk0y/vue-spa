<template>
  <nav>
    <router-link to="/">Home | </router-link>
    <router-link to="/about">About | </router-link>
    <router-link to="/login" v-if="!this.$store.getters.isAuthenticated">Login | </router-link>
    <router-link to="/signup" v-if="!this.$store.getters.isAuthenticated">Signup | </router-link>
    <router-link to="/logout" v-if="this.$store.getters.isAuthenticated">Logout | </router-link>
    <router-link to="/products">Products | </router-link>
    <router-link to="/cart" v-if="this.$store.getters.isAuthenticated">Cart | </router-link>
    <router-link to="/order" v-if="this.$store.getters.isAuthenticated">Orders</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>