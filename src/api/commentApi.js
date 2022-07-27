import { API_URL, authAxios } from "./constants";

const commentApi = {
  getAllCommentShoes: async (payload) => {
    const url = `/khachhang/binhluan/giay/${payload}`;
    const { data } = await authAxios.get(`${API_URL}${url}`);
    return data;
  },
  getAllCommentPK: async (payload) => {
    const url = `/khachhang/binhluan/phukien/${payload}`;
    const { data } = await authAxios.get(`${API_URL}${url}`);
    return data;
  },
  postComments: (payload) => {
    const url = "/khachhang/binhluan";
    return authAxios.post(`${API_URL}${url}`, payload);
  },
};

export default commentApi;
