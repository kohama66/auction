import { DefaultApi } from "@/openapi";
import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_URL;
const instance = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default new DefaultApi(undefined, baseURL, instance);
