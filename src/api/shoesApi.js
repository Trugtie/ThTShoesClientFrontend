import {API_URL} from './constants';
import axios from "axios";

const shoesApi = {
    getAll: async () => {
        const url = '/khachhang/giay';
        const {data} = await axios.get(`${API_URL}${url}`);
        return data;
    },
    getShoesHomepage: async () => {
        const url = '/khachhang/trangchu'
        const {data} = await axios.get(`${API_URL}${url}`);
        return data;
    }
  }
  
  export default shoesApi;