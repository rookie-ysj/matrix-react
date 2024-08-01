import { configureStore } from '@reduxjs/toolkit';
import matrix from './matrix.ts';
import currentBlock from './currentBlock.ts';

const store = configureStore({
  reducer: {
    matrix,
    currentBlock
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch