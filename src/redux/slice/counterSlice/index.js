import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decremenet: (state) => {
      state.counter -= 1;
    },
    change: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, decremenet, change } = counterSlice.actions;

export default counterSlice.reducer;
