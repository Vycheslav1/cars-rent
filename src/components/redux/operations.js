import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6572088cd61ba6fcc0144327.mockapi.io';

const urlAdverts = new URL(
  'https://6572088cd61ba6fcc0144327.mockapi.io/adverts/adverts'
);

const urlFavorites = new URL(
  'https://6572088cd61ba6fcc0144327.mockapi.io/favorites'
);

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (page, thunkAPI) => {
    try {
      urlAdverts.searchParams.append('completed', false);
      urlAdverts.searchParams.append('page', page);
      urlAdverts.searchParams.append('limit', 12);
      const response = await axios.get(urlAdverts);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchAll',
  async (page, thunkAPI) => {
    try {
      urlFavorites.searchParams.append('completed', false);
      urlFavorites.searchParams.append('page', page);
      urlFavorites.searchParams.append('limit', 12);
      const response = await axios.get(urlFavorites);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMakes = createAsyncThunk(
  'makes/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/makes');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (
    {
      id,
      year,
      make,
      model,
      type,
      img,
      description,
      fuelConsumption,
      engineSize,
      accessories,
      functionalities,
      rentalPrice,
      rentalCompany,
      address,
      rentalConditions,
      mileage,
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(`/favorites`, {
        id,
        year,
        make,
        model,
        type,
        img,
        description,
        fuelConsumption,
        engineSize,
        accessories,
        functionalities,
        rentalPrice,
        rentalCompany,
        address,
        rentalConditions,
        mileage,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (favoriteId, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorites/${favoriteId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
