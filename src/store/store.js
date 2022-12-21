import { configureStore } from '@reduxjs/toolkit';
import { svgReducer } from './slices/svgSlice';

const store = configureStore({
  reducer: {
    svg: svgReducer,
  },
});

export default store;
