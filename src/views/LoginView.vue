<template>
  <div class="login">
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent} from "vue";
import Login from "@/components/Login.vue";

export default defineComponent({
  components: {Login}
})
</script>
