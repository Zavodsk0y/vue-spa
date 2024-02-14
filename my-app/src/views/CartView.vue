<template>
  <div class="cart">
    <Cart></Cart>
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent} from "vue";
import Cart from "@/components/Cart.vue";

export default defineComponent({
  components: {Cart}
})
</script>
