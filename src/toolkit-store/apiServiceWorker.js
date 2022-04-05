import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const apiServiceWorker = createAsyncThunk(
  "users/getUsers",
  async (dispatch, getState) => {
    return fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`).then(
      (res) => res.json()
    );
  }
);

// const apiServiceWorker = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts?_limit=2"
//   );
//   return response.data;
// };
