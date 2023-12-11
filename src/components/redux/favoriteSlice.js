import { createSlice } from '@reduxjs/toolkit';
import { fetchFavorites, addFavorite, deleteFavorite } from './operations.js';

const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = '';
};

const handleFulfilledGet = (state, action) => {
  state.isLoading = false;
  state.error = '';
  state.items = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};
const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    favorite => favorite.id === action.payload
  );
  state.items.splice(index, 1);
};
const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    page: 1,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFavorites.pending, handlePending)
      .addCase(fetchFavorites.fulfilled, handleFulfilledGet)
      .addCase(fetchFavorites.rejected, handleRejected)
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, handleFulfilledAdd)
      .addCase(addFavorite.rejected, handleRejected)
      .addCase(deleteFavorite.pending, handlePending)
      .addCase(deleteFavorite.fulfilled, handleFulfilledDelete)
      .addCase(deleteFavorite.rejected, handleRejected);
  },
});

export const favoriteReducer = favoriteSlice.reducer;
