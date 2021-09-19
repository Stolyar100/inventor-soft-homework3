<template>
  <div class="todo">
    <h3>{{ todo.title }}</h3>
    <label class="todo__checkbox-label">
      <input class="todo__input" type="checkbox" :value="todo.completed" />
    </label>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: {
      userId: Number,
      id: Number,
      title: String,
      completed: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border: 1px solid #75c5b7;
  border-radius: 2px;
}
</style>
