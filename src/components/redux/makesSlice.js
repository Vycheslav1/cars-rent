import { createSlice } from '@reduxjs/toolkit';
import { fetchMakes } from './operations.js';

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

const makesSlice = createSlice({
  name: 'makes',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMakes.pending, handlePending)
      .addCase(fetchMakes.fulfilled, handleFulfilledGet)
      .addCase(fetchMakes.rejected, handleRejected);
  },
});

export const makesReducer = makesSlice.reducer;
