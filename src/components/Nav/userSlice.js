import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import jwt from "jwt-decode";
import {
  STATUS_IDLE,
  STATUS_PENDING,
  STATUS_REJECTED,
  STATUS_FULFILLED,
} from "../../api/constants";

export default createSlice({
  name: "user",
  initialState: {
    status: STATUS_IDLE,
    current:
      localStorage.getItem("user") !== null
        ? JSON.parse(localStorage.getItem("user"))
        : {},
  },
  reducers: {
    logout: (state, action) => {
      state.status = STATUS_IDLE;
      state.current = {};
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      localStorage.removeItem("access_token_decode");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.rejected, (state, action) => {
        state.current = {};
        state.status = STATUS_REJECTED;
      })
      .addCase(getMyInfo.fulfilled, (state, action) => {
        state.current = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.status = STATUS_IDLE;
      })
      .addCase(getMyInfo.rejected, (state, action) => {
        state.current = {};
        state.status = STATUS_REJECTED;
      })
      .addCase(updateInfo.rejected, (state, action) => {
        state.status = STATUS_REJECTED;
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
        state.current = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.status = STATUS_FULFILLED;
      });
  },
});

export const login = createAsyncThunk("user/login", async (params) => {
  const { data } = await userApi.login(params);
  const token = data.slice(7);
  const tokenDecode = jwt(token);
  localStorage.setItem("access_token", token);
  localStorage.setItem("access_token_decode", JSON.stringify(tokenDecode));
});

export const getMyInfo = createAsyncThunk("user/getInfo", async (params) =>
  userApi.getMe(params)
);

export const updateInfo = createAsyncThunk("user/updateInfo", async (params) =>
  userApi.update(params)
);
