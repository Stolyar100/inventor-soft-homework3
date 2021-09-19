import axios from "axios";

const $axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

$axios.interceptors.response.use(
  (res) => res.data,
  (err) => console.error(err)
);

export default $axios;
