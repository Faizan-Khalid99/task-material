import { createSlice } from "@reduxjs/toolkit";
import { apiServiceWorker } from "../apiServiceWorker";

const initialState = {
  value: [],
  status: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    removeUser: (state, action) => {
      state.value = state.value.filter(
        (user, index) => index !== action.payload
      );
    },
  },
  extraReducers: {
    [apiServiceWorker.pending]: (state, action) => {
      state.status = "loading";
    },
    [apiServiceWorker.fulfilled]: (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    },
    [apiServiceWorker.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
