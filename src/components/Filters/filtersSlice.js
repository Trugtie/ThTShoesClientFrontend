import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    category: "",
    type: [],
    price: [0, 6000000],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    categoryFilterChange: (state, action) => {
      state.category = action.payload;
    },
    typeFilterChange: (state, action) => {
      state.type = action.payload;
    },
    priceFilterChange: (state, action) => {
      state.price = action.payload;
    },
  },
});
