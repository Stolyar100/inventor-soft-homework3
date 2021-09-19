import $axios from "@/core/api.configuration";

class TodoService {
  getTodos() {
    return $axios.get("/todos");
  }
}

export default new TodoService();
