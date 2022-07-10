import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import shoeslistSlice from "../components/ShoesList/shoeslistSlice";
import userSlice from "../components/Nav/userSlice";
import cartSlice from "../pages/CartPage/cartSlice";
import eventSlice from "../pages/EventPage/eventSlice";
import accessoriesSlice from "../components/ShoesList/accessoriesSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    shoesList: shoeslistSlice.reducer,
    user:userSlice.reducer,
    cart:cartSlice.reducer,
    event:eventSlice.reducer,
    accessories:accessoriesSlice.reducer,
  },
});

export default store;
