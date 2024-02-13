<template>
  <div class="logout">
    <Logout></Logout>
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent} from "vue";
import Logout from "@/components/Logout.vue";

export default defineComponent({
  components: {Logout}
})
</script>
