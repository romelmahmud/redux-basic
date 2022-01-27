import { createSlice } from "@reduxjs/toolkit";

const initalCounterState = {
  counter: 0,
  isShowing: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initalCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.isShowing = !state.isShowing;
    },
  },
});
export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
