import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "cart",
  initialState: {
    list:
      localStorage.getItem("cart") !== null
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    totalCart:
      localStorage.getItem("totalCart") !== null
        ? JSON.parse(localStorage.getItem("totalCart"))
        : 0,
  },
  reducers: {
    addCart: (state, action) => {
      const index = state.list.findIndex((item) => {
        return item.id.includes("GA")
          ? item.id === action.payload.id &&
              item.color.mamau === action.payload.color.mamau &&
              item.size.masize === action.payload.size.masize
          : item.id === action.payload.id;
      });
      if (index !== -1) {
        state.list[index].count += 1;
        state.list[index].priceSum += action.payload.price;
      } else state.list.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.list));
    },
    removeCart: (state, action) => {
      const index = state.list.findIndex((item) => {
        return item.id.includes("GA")
          ? item.id === action.payload.id &&
              item.color.mamau === action.payload.color.mamau &&
              item.size.masize === action.payload.size.masize
          : item.id === action.payload.id;
      });
      state.list.splice(index, 1);
      if (state.list.length > 0) {
        localStorage.setItem("cart", JSON.stringify(state.list));
      } else {
        localStorage.removeItem("cart");
        localStorage.removeItem("totalCart");
      }
    },
    inCreaseCart: (state, action) => {
      const index = state.list.findIndex((item) => {
        return item.id.includes("GA")
          ? item.id === action.payload.id &&
              item.color.mamau === action.payload.color.mamau &&
              item.size.masize === action.payload.size.masize
          : item.id === action.payload.id;
      });
      state.list[index].count += 1;
      state.list[index].priceSum += state.list[index].price;
      localStorage.setItem("cart", JSON.stringify(state.list));
    },
    deCreaseCart: (state, action) => {
      const index = state.list.findIndex((item) => {
        return item.id.includes("GA")
          ? item.id === action.payload.id &&
              item.color.mamau === action.payload.color.mamau &&
              item.size.masize === action.payload.size.masize
          : item.id === action.payload.id;
      });
      state.list[index].count -= 1;
      state.list[index].priceSum -= state.list[index].price;
      if (state.list[index].count === 0) state.list.splice(index, 1);
      if (state.list.length > 0) {
        localStorage.setItem("cart", JSON.stringify(state.list));
      } else {
        localStorage.removeItem("cart");
        localStorage.removeItem("totalCart");
      }
    },
    updateTotalCart: (state, action) => {
      state.totalCart = action.payload;
      localStorage.setItem("totalCart", state.totalCart);
    },
    resetCart: (state, action) => {
      state.list = [];
      state.totalCart = 0;
      localStorage.removeItem("cart");
      localStorage.removeItem("totalCart");
    },
  },
});
