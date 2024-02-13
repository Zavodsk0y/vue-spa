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
    ...mapGetters(['getProducts']),
    products() {
      return this.getProducts
    }
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
    <article class="cards">
        <div v-for="product in products" :key="product.id" class="card">
            <p class="b-b">Name: {{product.name}}</p>
            <p>Description: {{product.description}}</p>
        </div>
    </article>
  </section>
</template>

<style scoped>

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
  justify-items: center;
}

.card {
  width: 300px;
  border: 1px solid grey;
}

.b-b {
  border-bottom: 1px solid black;
}

</style>