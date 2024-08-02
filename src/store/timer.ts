import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const timer = createSlice({
  name: 'timer',
  initialState: {
    timer: 0
  },
  reducers: {
    setTimer(state, action: PayloadAction<number>) {
      state.timer = action.payload;
    },
    clearTimer(state) {
      clearTimeout(state.timer)
    }
  }
})

export const {setTimer,clearTimer} = timer.actions
export default timer.reducer