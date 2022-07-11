import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accessoriesApi from "../../api/accessoriesApi";
import {
  STATUS_IDLE,
  STATUS_PENDING,
  STATUS_REJECTED,
  STATUS_FULFILLED,
} from "../../api/constants";

export default createSlice({
  name: "accessories",
  initialState: {
    status: STATUS_IDLE,
    list:
      sessionStorage.getItem("accessories") !== null
        ? JSON.parse(sessionStorage.getItem("accessories"))
        : [],
    types:sessionStorage.getItem("accessoriesTypes") !== null
    ? JSON.parse(sessionStorage.getItem("accessoriesTypes"))
    : [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessories.pending, (state, action) => {
        state.status = STATUS_PENDING;
      })
      .addCase(fetchAccessories.fulfilled, (state, action) => {
        state.list = action.payload.phukiens;
        state.status = STATUS_FULFILLED;
        sessionStorage.setItem("accessories", JSON.stringify(state.list));
      })
      .addCase(fetchAccessories.rejected, (state, action) => {
        state.list = [];
        state.status = STATUS_REJECTED;
      })
      .addCase(fetchAccessoriesTypes.pending, (state, action) => {
        state.status = STATUS_PENDING;
      })
      .addCase(fetchAccessoriesTypes.fulfilled, (state, action) => {
        state.types = action.payload.loaiPhuKiens;
        state.status = STATUS_FULFILLED;
        sessionStorage.setItem("accessoriesTypes", JSON.stringify(state.types));
      })
      .addCase(fetchAccessoriesTypes.rejected, (state, action) => {
        state.types = [];
        state.status = STATUS_REJECTED;
      });
  },
});

export const fetchAccessories = createAsyncThunk(
  "shoes/fetchAccessories",
  async () => accessoriesApi.getAll()
);

export const fetchAccessoriesTypes = createAsyncThunk(
  "shoes/fetchAccessoriesTypes",
  async () => accessoriesApi.getAllTypes()
);
