<template>
  <div class="auth">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Home",
  components: {
    LoginForm,
  },
};
</script>
<style lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login {
  max-width: 250px;
  width: 100%;
}
</style>
