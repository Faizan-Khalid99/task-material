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
    updateUsername: (state, action) => {
      state.value.map((user, index) => {
        if (index === action.payload.index) {
          user.name = action.payload.newUserName;
        }
      });
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

export const { addUser, removeUser, updateUsername } = userSlice.actions;

export default userSlice.reducer;
