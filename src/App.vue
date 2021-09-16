<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/auth">Auth</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.default-el {
  border: 1px solid #75c5b7;
  padding: 10px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
  font-weight: 600;
  border-radius: 2px;
  color: #75c5b7;
  background: #f8fff6;
}
</style>
