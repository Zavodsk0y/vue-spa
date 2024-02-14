<script>
import store from "@/store";
import AUTH_REQUEST from "@/store"
import {mapGetters} from "vuex";
import {addProductToCartRequest} from "@/utils/api";

export default {
  name: "Products",
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getProducts']),
    products() {
      return this.getProducts
    },
  },
  methods: {
    addProductToCartRequest
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
        <p class="b-b">{{ product.name }}</p>
        <p>{{ product.description }}</p>
        <p>{{ product.price }} &euro;</p>
        <button v-if="this.$store.getters.isAuthenticated"
                v-on:click="addProductToCartRequest(this.$store.token, product.id)">Добавить в корзину
        </button>
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
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.card > p:nth-child(2) {
  height: 100px;
}

.card > p:nth-child(1) {
  height: 40px;
}

button {
  background: dodgerblue;
  color: aliceblue;
  border: none;
  cursor: pointer;
}


.b-b {
  border-bottom: 1px solid black;
}

</style>