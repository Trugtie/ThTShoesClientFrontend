import { API_URL } from "./constants";
import axios from "axios";

const eventApi = {
  getAll: async (payload) => {
    const url = `/khachhang/khuyenmai`;
    const {data} = await axios.get(`${API_URL}${url}`)
    return data;
  },
};

export default eventApi;
