<template>
  <div class="todoList">
    <button class="todoList__btn default-el" @click="logoutUser">
      Log Out
    </button>
    <Todo
      class="todoList__item"
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Todo from "@/components/Todo.vue";

export default {
  name: "Home",
  components: {
    Todo,
  },
  mounted: function () {
    this.getTodos();
  },
  computed: {
    ...mapGetters(["todos"]),
  },
  methods: {
    ...mapActions(["logout", "getTodos"]),
    async logoutUser() {
      await this.logout();
      this.$router.push({ name: "Auth" });
    },
  },
};
</script>

<style lang="scss">
.todoList {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__btn {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  &__item {
    max-width: 450px;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
  }
}
</style>
