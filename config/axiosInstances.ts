import axios from "axios";
import * as AXIOS_HELPERS from "./axiosHelpers";

const httpPublic = axios.create({
  baseURL: AXIOS_HELPERS.getEnvironmentUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

const httpPrivate = axios.create({
  baseURL: AXIOS_HELPERS.getEnvironmentUrl(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


export { httpPublic, httpPrivate };
