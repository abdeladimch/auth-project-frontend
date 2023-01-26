import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://auth-api-e3fi.onrender.com/api",
});

export default customFetch;
