<script>
import store from "@/store";
import AUTH_REQUEST from "@/store"
export default {
  name: "Login",
  data() {
    return {
      products: []
    }
  },
  methods: {
  },
  mounted() {
    this.$store
        .dispatch('GET_PRODUCTS_REQUEST')
    this.products = this.$store.getters.SET_PRODUCTS
  }
}
</script>

<template>
  <section>
    <article>
      <div v-for="product in products" :key="product.id">
        <span>Name: {{product.name}}</span>
        <span>Description: {{product.description}}</span>
      </div>
    </article>
  </section>
</template>

<style scoped>


</style>