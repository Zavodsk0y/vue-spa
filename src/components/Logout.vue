<script>
export default {
  name: "Logout",
  data() {
    return {
      errors: [],
    }
  },
  methods: {
    fetchLogout() {
      this.$store
          .dispatch('LOGOUT_REQUEST')
          .then(() => this.$router.push("/"))
    }
  }
}
</script>

<template>
  <h2>Вы действительно хотите выйти из аккаунта?</h2>
  <button @click="fetchLogout">Выйти</button>
</template>

<style scoped>

button {
  border: 1px solid black;
  border-radius: 5px;
}

</style>