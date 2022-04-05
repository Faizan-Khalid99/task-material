import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/UserSlice";

export const toolkitStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
