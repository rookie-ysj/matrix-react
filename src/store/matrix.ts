import { createSlice } from '@reduxjs/toolkit';
import { create2DArray } from '../components/utils/globalFunction.ts';

const initialState = {
  matrix: create2DArray(10, 20)
}
export const matrix = createSlice({
  name: 'matrix',
  initialState: initialState,
  reducers: {
    setMatrix: (state, action) => {
      state.matrix = action.payload
    }
  }
})

export const {} = matrix.reducer
export default matrix.reducer