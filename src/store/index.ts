import { configureStore } from '@reduxjs/toolkit';
import matrix from './matrix.ts';
import currentBlock from './currentBlock.ts';
import timer from "./timer.ts";

const store = configureStore({
  reducer: {
    matrix,
    currentBlock,
    timer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({serializableCheck: false})
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch