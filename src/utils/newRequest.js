import axios from "axios";

const newRequest = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  withCredentials: true,
});

export default newRequest;