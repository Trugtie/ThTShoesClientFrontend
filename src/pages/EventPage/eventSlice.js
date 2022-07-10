import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventApi from "../../api/eventApi";
import {
    STATUS_IDLE,
    STATUS_PENDING,
    STATUS_REJECTED,
    STATUS_FULFILLED,
  } from "../../api/constants";

export default createSlice({
  name: "event",
  initialState: {
    status: STATUS_IDLE,
    list:
    sessionStorage.getItem("event") !== null
        ? JSON.parse(sessionStorage.getItem("event"))
        : [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvent.pending, (state, action) => {
        state.status = STATUS_PENDING;
      })
      .addCase(fetchEvent.fulfilled, (state, action) => {
        state.list = action.payload.khuyenMaiList;
        state.status = STATUS_FULFILLED;
        sessionStorage.setItem("event", JSON.stringify(state.list));
      })
      .addCase(fetchEvent.rejected, (state, action) => {
        state.list = [];
        state.status = STATUS_REJECTED;
      })
  },
});

export const fetchEvent = createAsyncThunk("event/fetchEvent", async () =>
  eventApi.getAll()
);
