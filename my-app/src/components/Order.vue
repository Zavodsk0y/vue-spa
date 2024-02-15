<script>
import {mapGetters} from "vuex";

export default {
  name: "Order",
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getOrders']),
    orders() {
      return this.getOrders
    },
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('GET_ORDERS_REQUEST')
        .then(() => {
          console.log('Orders are successful')
        })
        .catch(error => {
          console.log(error.message)
        })
  },
}
</script>

<template>
  <h2>Ваши заказы</h2>
  <section>
    <article class="cards">
      <div v-for="order in orders" :key="order.id" class="card">
        <p class="b-b">Идентификатор заказа: {{ order.id }}</p>
        <p>Идентификаторы товаров в заказе: <br> {{ order.products }}</p>
        <p>Общая стоимость заказа: {{ order.order_price }} &euro;</p>
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