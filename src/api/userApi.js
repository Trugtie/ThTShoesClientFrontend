import { API_URL, authAxios } from "./constants";
import axios from "axios";

const userApi = {
  login: (payload) => {
    const url = "/login";
    return axios.post(`${API_URL}${url}`, null, {
      params: {
        username: payload.username,
        password: payload.password,
      },
    });
  },
  getMe: async (payload) => {
    const url = `/khachhang/${payload}`;
    const { data } = await authAxios.get(`${API_URL}${url}`);
    return data;
  },
  register: (payload) => {
    const url = "/khachhang/dangky";
    return axios.post(`${API_URL}${url}`, payload);
  },
};

export default userApi;
