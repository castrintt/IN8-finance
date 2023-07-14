import { createSlice } from "@reduxjs/toolkit";
import { testSomething } from "./actions";

type InitialState = {
  error: string | null;
  loading: boolean;
  data: any;
};

const initialState: InitialState = {
  error: null,
  loading: false,
  data: null,
};

const testReducer = createSlice({
  name: "authClientReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(testSomething.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(testSomething.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(testSomething.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export default testReducer.reducer;
