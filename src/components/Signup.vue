<script>
import SIGNUP_REQUEST from "@/store/index"
export default {
  name: "Signup",
  data() {
    return {
      fio: "",
      email: "",
      password: "",
      errors: [],
    }
  },
  methods: {
    fetchSignup() {
      const user = {
        fio: this.fio,
        email: this.email,
        password: this.password
      }

      this.$store
          .dispatch('SIGNUP_REQUEST', user)
          .then(() => this.$router.push("/login"))
    }
  }
}
</script>

<template>
  <article>
    <form @submit.prevent="fetchSignup" class="login">
      <h2>Регистрация</h2>
      <div>
        <label for="fio_enter">ФИО</label>
        <input type="text" name="fio" id="fio_enter" v-model="fio">
      </div>
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