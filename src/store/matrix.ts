import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { create2DArray } from '../utils/globalFunction.ts';
import { MatrixData } from '../utils/constant.ts';

const initialState = {
  data: create2DArray<MatrixData>(10, 20)
}
const matrix = createSlice({
  name: 'matrix',
  initialState: initialState,
  reducers: {
    setMatrix: (state, action: PayloadAction<MatrixData[][]>) => {
      state.data = action.payload
    }
  }
})

export const { setMatrix } = matrix.actions
export default matrix.reducer