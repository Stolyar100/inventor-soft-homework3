<template>
  <div class="login">
    <label class="login__label default-el"
      ><input
        class="login__input"
        v-model="username"
        type="text"
        placeholder="username"
    /></label>
    <label class="login__label default-el"
      ><input
        class="login__input"
        v-model="password"
        type="password"
        placeholder="login"
    /></label>
    <button class="login__btn default-el" @click="loginSubmit">Login</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

const userLogin = "admin";
const userPassword = "admin";
export default {
  name: "Home",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    async loginSubmit() {
      if (this.username === userLogin && this.password === userPassword) {
        await this.login();
        return this.$router.push({ name: "Home" });
      }
      this.username = "";
      this.password = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;

  &__btn {
    background-color: #75c5b7;
    color: #fff;

    &:active {
      background-color: #fff;
    }
  }

  &__label {
    margin-bottom: 10px;
  }

  &__input {
    border: 0;
    width: 100%;
    outline: none;
    background: transparent;
  }
}
</style>
