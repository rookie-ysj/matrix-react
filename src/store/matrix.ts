import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { create2DArray } from '../utils/globalFunction.ts';
import { MatrixData, MAX_COLUMN_SIZE, MAX_ROW_SIZE } from '../utils/constant.ts';

const initialState = {
  data: create2DArray<MatrixData>(MAX_COLUMN_SIZE, MAX_ROW_SIZE)
}
const matrix = createSlice({
  name: 'matrix',
  initialState: initialState,
  reducers: {
    setMatrix: (state, action: PayloadAction<MatrixData[][]>) => {
      console.log(action.payload)
      state.data = action.payload
    }
  }
})

export const { setMatrix } = matrix.actions
export default matrix.reducer