<template>
  <div class="order">
    <Order></Order>
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent} from "vue";
import Order from "@/components/Order.vue";

export default defineComponent({
  components: {Order}
})
</script>
