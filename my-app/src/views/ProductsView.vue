<template>
  <div class="products">
    <Products></Products>
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent} from "vue";
import Products from "@/components/Products.vue";

export default defineComponent({
  components: {Products}
})
</script>
