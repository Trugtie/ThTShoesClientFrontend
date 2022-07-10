import {API_URL} from './constants';
import axios from "axios";

const accessoriesApi = {
    getAll: async () => {
        const url = '/khachhang/phukien';
        const {data} = await axios.get(`${API_URL}${url}`);
        return data;
    },
  }
  
  export default accessoriesApi;