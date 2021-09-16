<template>
  <div class="login">
    <label class="login__label default-el"
      ><input
        class="login__input"
        v-model="login"
        type="text"
        placeholder="login"
    /></label>
    <label class="login__label default-el"
      ><input
        class="login__input"
        v-model="password"
        type="text"
        placeholder="login"
    /></label>
    <button class="login__btn default-el" @click="loginUser">Login</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    loginUser() {},
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
  }
}
</style>
