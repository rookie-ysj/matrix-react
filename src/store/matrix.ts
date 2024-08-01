import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { create2DArray } from '../utils/globalFunction.ts';

const initialState = {
  matrix: create2DArray(10, 20)
}
const matrix = createSlice({
  name: 'matrix',
  initialState: initialState,
  reducers: {
    setMatrix: (state, action: PayloadAction<number[][]>) => {
      state.matrix = action.payload
    }
  }
})

export const { setMatrix } = matrix.actions
export default matrix.reducer