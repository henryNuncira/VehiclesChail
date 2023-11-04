import axios from "axios";
import { headers } from "../../Utils/StageHandler"

const axios_vehicles = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axios_vehicles.interceptors.request.use(config => {
   const token = localStorage.getItem("token");
   if (token ) {
    config.headers = {
      ...headers,
      Token: `${token}`,
      Accept: "application/json",
    };
  }
  return config;
});



export { axios_vehicles };
