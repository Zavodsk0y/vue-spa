<script>
import store from "@/store";
import AUTH_REQUEST from "@/store"
import {mapGetters} from "vuex";
export default {
  name: "Products",
  data() {
    return {
      products: []
    }
  },
  computed: {
    ...mapGetters(['getProducts'])
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('GET_PRODUCTS_REQUEST')
        .catch(error => {
          console.error('Failed to fetch', error)
        })
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