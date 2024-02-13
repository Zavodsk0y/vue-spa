<template>
  <div class="home">
    <Home></Home>
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent} from "vue";
import Home from "@/components/Home.vue";

export default defineComponent({
  components: {Home}
})
</script>
