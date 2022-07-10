import { API_URL, authAxios } from "./constants";
import axios from "axios";

const payApi = {
  getVoucher: async (payload) => {
    const url = `/khachhang/khuyenmai/${payload}`;
    return await axios.get(`${API_URL}${url}`);
  },
  payOrderToken: (payload) => {
    const url = `/khachhang/dathang`;
    return authAxios.post(`${API_URL}${url}`,payload);
  },
  payOrderNonToken: (payload) => {
    const url = `/khachhang/dathang/khachvanglai`;
    return axios.post(`${API_URL}${url}`,payload);
  },
};

export default payApi;
