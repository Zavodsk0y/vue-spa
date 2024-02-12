<template>
  <div class="signup">
    <Signup></Signup>
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent} from "vue";
import Signup from "@/components/Signup.vue";

export default defineComponent({
  components: {Signup}
})
</script>
