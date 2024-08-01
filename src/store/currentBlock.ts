import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Block } from '../utils/block.ts';
import { MatrixData } from '../utils/constant.ts';

type InitialState = {
  block: Block
}

const initialState: InitialState = {
  block: new Block(3, 0)
}

const currentBlock = createSlice({
  name: "currentBlock",
  initialState: initialState,
  reducers: {
    setCurBlockX: (state, action: PayloadAction<number>) => {
      state.block.x = action.payload;
    },
    setCurBlockY: (state, action: PayloadAction<number>) => {
      state.block.y = action.payload;
    },
    setCurBlockShape: (state, action: PayloadAction<MatrixData[][]>) => {
      state.block.shape = action.payload;
    },
    resetCurBlock: (state) => {
      state.block = new Block(3, 0);
    }
  }
})

export const {
  setCurBlockX,
  setCurBlockY,
  setCurBlockShape,
  resetCurBlock
} = currentBlock.actions
export default currentBlock.reducer