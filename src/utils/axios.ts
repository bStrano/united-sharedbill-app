import axios from "axios";
import { HOST_API_KEY } from "@constants/config";

const api = axios.create({ baseURL: HOST_API_KEY });

export default api;
