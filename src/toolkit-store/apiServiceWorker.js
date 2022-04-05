import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const apiServiceWorker = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?_limit=5`
    );
    return await response.data;
  } catch (error) {
    return console.log(error);
  }
});

// return fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`).then(
//   (res) => res.json()
// );
