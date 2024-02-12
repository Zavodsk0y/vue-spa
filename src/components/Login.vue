<script>
  import store from "@/store";
  import AUTH_REQUEST from "@/store/index"
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
        errors: [],
      }
    },
    methods: {
      fetchLogin() {
        const user = {
          email: this.email,
          password: this.password
        }

        this.$store
            .dispatch('AUTH_REQUEST', user)
            .then(() => this.$router.push("/"))
      }
    }
  }
</script>

<template>
  <article>
    <form @submit.prevent="fetchLogin" class="login">
      <h2>Авторизация</h2>
      <div>
        <label for="email_enter">Почта</label>
        <input type="email" name="email" id="email_enter" v-model="email">
      </div>
      <div>
        <label for="password_enter">Пароль</label>
        <input type="password" name="password" id="password_enter" v-model="password">
      </div>
      <div>
        <button class="approve_button" type="submit">Отправить</button>
        <button class="cancel_button">Отмена</button>
      </div>
    </form>
  </article>
</template>

<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    margin: 0 auto;
    gap: 10px;
  }

  .login input, button {
    border: 1px solid black;
    border-radius: 5px;
  }

</style>