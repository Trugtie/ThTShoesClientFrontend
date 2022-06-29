import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import shoeslistSlice from "../components/ShoesList/shoeslistSlice";
import userSlice from "../components/Nav/userSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    shoesList: shoeslistSlice.reducer,
    user:userSlice.reducer,
  },
});

export default store;
