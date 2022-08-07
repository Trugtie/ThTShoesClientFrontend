import { API_URL, authAxios } from "./constants";
import axios from "axios";
import { toggleBlur } from "../components/BlurLoading";

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
  update: async (payload) => {
    const url = "/khachhang";
    const { data } = await authAxios.put(`${API_URL}${url}`, payload);
    return data;
  },
  changePass: (payload) => {
    const url = "/doimatkhau";
    return authAxios.put(`${API_URL}${url}`, payload);
  },
  huyDon: (payload) => {
    const url = `/khachhang/dathang/huydonhang/${payload}`;
    return authAxios.put(`${API_URL}${url}`);
  },
  getHistory: async () => {
    const url = `/khachhang/dathang/lichsudathang`;
    const { data } = await authAxios.get(`${API_URL}${url}`);
    return data;
  },
  getHistoryNoneToken: async (payload) => {
    toggleBlur();
    const url = `/khachhang/dathang/khachvanglai/lichsudathang/${payload}`;
    return await axios.get(`${API_URL}${url}`);
  },
  resetPass: async (payload) => {
    const url = `/quenmatkhau/${payload}`;
    const { data } = await authAxios.get(`${API_URL}${url}`);
    return data;
  },
};

export default userApi;
