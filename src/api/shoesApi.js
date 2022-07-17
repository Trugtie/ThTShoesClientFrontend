import { API_URL } from "./constants";
import axios from "axios";

const shoesApi = {
  getAll: async () => {
    const url = "/khachhang/giay";
    const { data } = await axios.get(`${API_URL}${url}`);
    return data;
  },
  getShoesHomepage: async () => {
    const url = "/khachhang/trangchu";
    const { data } = await axios.get(`${API_URL}${url}`);
    return data;
  },
  getAllTypes: async () => {
    const url = "/khachhang/loaigiay";
    const { data } = await axios.get(`${API_URL}${url}`);
    return data;
  },
  getById: async (id) => {
    const url = "/khachhang/giay";
    const { data } = await axios.get(`${API_URL}${url}/${id}`);
    return data;
  },
};

export default shoesApi;
