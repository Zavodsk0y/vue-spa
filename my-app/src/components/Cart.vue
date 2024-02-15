<script>
import {mapGetters} from "vuex";
import {removeProductFromCartRequest} from "@/utils/api";

export default {
  name: "Cart",
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getCart']),
    cart() {
      return this.getCart
    },
  },
  methods: {
    removeFromCart(productId) {
      this.$store.dispatch('REMOVE_PRODUCT_FROM_CART_REQUEST', productId)
          .then(() => {
            console.log('Success')
          })
          .catch(error => {
            console.log(error.message)
          })
    }
  },
  mounted() {
    this.$store.dispatch('GET_CART_REQUEST')
        .then(() => {
          console.log('Cart is success')
        })
        .catch(error => {
          console.log(error.message)
        })
  },
}
</script>

<template>
  <h2>Корзина</h2>
  <section>
    <article class="cards">
      <div v-for="product in cart" :key="product.id" class="card">
        <p class="b-b">{{ product.name }}</p>
        <p>{{ product.description }}</p>
        <p>{{ product.price }} &euro;</p>
        <button v-if="this.$store.getters.isAuthenticated"
                v-on:click="removeFromCart(product.id)" >Удалить из корзины
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