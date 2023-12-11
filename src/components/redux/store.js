import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';
import { favoriteReducer } from './favoriteSlice';
import { makesReducer } from './makesSlice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: favoriteReducer,
    makes: makesReducer,
  },
});
