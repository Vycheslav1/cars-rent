import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations.js';

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

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    page: 1,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFulfilledGet)
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
