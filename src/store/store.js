import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import shoeslistSlice from "../components/ShoesList/shoeslistSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    shoesList: shoeslistSlice.reducer,
  },
});

export default store;
