import $axios from "@/core/api.configuration";

class TodoService {
  getTodo() {
    return $axios.get("/todos");
  }
}

export default new TodoService();
