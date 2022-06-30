import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import shoeslistSlice from "../components/ShoesList/shoeslistSlice";
import userSlice from "../components/Nav/userSlice";
import cartSlice from "../pages/CartPage/cartSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    shoesList: shoeslistSlice.reducer,
    user:userSlice.reducer,
    cart:cartSlice.reducer
  },
});

export default store;
