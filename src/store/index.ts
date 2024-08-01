import { configureStore } from '@reduxjs/toolkit';
import matrix from './matrix.ts';

const store = configureStore({
  reducer: {
    matrix
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch