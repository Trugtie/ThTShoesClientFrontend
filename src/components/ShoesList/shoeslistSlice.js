import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import shoesApi from "../../api/shoesApi";

export default createSlice({
  name: "shoesList",
  initialState: {
    status: "idle",
    shoesList:
      sessionStorage.getItem("shoeslist") !== null
        ? JSON.parse(sessionStorage.getItem("shoeslist"))
        : [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchShoes.fulfilled, (state, action) => {
        state.shoesList = action.payload;
        state.status = "idle";
        sessionStorage.setItem("shoeslist", JSON.stringify(state.shoesList));
      })
      .addCase(fetchShoes.rejected, (state, action) => {
        state.shoesList = [];
        state.status = "error";
      });
  },
});

export const fetchShoes = createAsyncThunk("shoes/fetchShoes", async () =>
  shoesApi.getAll()
);
