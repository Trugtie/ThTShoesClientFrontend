import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import shoesApi from "../../api/shoesApi";
import {
  STATUS_IDLE,
  STATUS_PENDING,
  STATUS_REJECTED,
  STATUS_FULFILLED,
} from "../../api/constants";

export default createSlice({
  name: "shoesList",
  initialState: {
    status: STATUS_IDLE,
    shoesList:
      sessionStorage.getItem("shoeslist") !== null
        ? JSON.parse(sessionStorage.getItem("shoeslist"))
        : [],
    shoesListHomepage:
      sessionStorage.getItem("shoesListHomepage") !== null
        ? JSON.parse(sessionStorage.getItem("shoesListHomepage"))
        : [],
    types:
      sessionStorage.getItem("shoesTypes") !== null
        ? JSON.parse(sessionStorage.getItem("shoesTypes"))
        : [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoes.pending, (state, action) => {
        state.status = STATUS_PENDING;
      })
      .addCase(fetchShoes.fulfilled, (state, action) => {
        state.shoesList = action.payload;
        state.status = STATUS_FULFILLED;
        sessionStorage.setItem("shoeslist", JSON.stringify(state.shoesList));
      })
      .addCase(fetchShoes.rejected, (state, action) => {
        state.shoesList = [];
        state.status = STATUS_REJECTED;
      })
      .addCase(fetchShoesHomepage.pending, (state, action) => {
        state.status = STATUS_FULFILLED;
      })
      .addCase(fetchShoesHomepage.fulfilled, (state, action) => {
        state.shoesListHomepage = action.payload;
        state.status = STATUS_FULFILLED;
        sessionStorage.setItem(
          "shoesListHomepage",
          JSON.stringify(state.shoesList)
        );
      })
      .addCase(fetchShoesHomepage.rejected, (state, action) => {
        state.shoesListHomepage = [];
        state.status = STATUS_REJECTED;
      })
      .addCase(fetchAllShoesTypes.pending, (state, action) => {
        state.status = STATUS_FULFILLED;
      })
      .addCase(fetchAllShoesTypes.fulfilled, (state, action) => {
        state.types = action.payload.loaiGiays;
        state.status = STATUS_FULFILLED;
        sessionStorage.setItem(
          "shoesTypes",
          JSON.stringify(state.types)
        );
      })
      .addCase(fetchAllShoesTypes.rejected, (state, action) => {
        state.types = [];
        state.status = STATUS_REJECTED;
      });
  },
});

export const fetchShoes = createAsyncThunk("shoes/fetchShoes", async () =>
  shoesApi.getAll()
);
export const fetchShoesHomepage = createAsyncThunk(
  "shoes/fetchShoesHomepage",
  async () => shoesApi.getShoesHomepage()
);

export const fetchAllShoesTypes = createAsyncThunk(
  "shoes/fetchAllShoesTypes",
  async () => shoesApi.getAllTypes()
);
