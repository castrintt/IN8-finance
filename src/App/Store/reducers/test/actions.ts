import { createAsyncThunk } from "@reduxjs/toolkit";


export const testSomething = createAsyncThunk(
  "test/end_point",
  async () => {
    // return await authService.authUser(user).then((response) => {
    //   return response;
    // });
  }
);
