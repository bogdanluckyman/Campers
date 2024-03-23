import axios from "axios";

const baseURL = "https://65fac1213909a9a65b1b6d9a.mockapi.io/api/v1";

export const axiosInstance = axios.create({
  baseURL,
});
