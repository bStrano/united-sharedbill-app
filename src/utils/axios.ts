import axios from "axios";
import { HOST_API_KEY } from "@constants/config";

const api = axios.create({ baseURL: HOST_API_KEY });

api.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);
api.defaults.headers.common.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.2yUt-64vNIjsfvxwm79LX4QBBocpqh0RA389es9-MrM";

export default api;
