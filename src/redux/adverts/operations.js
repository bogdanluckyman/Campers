import { createAsyncThunk } from '@reduxjs/toolkit';
import { gerAllSearchParams } from 'helpers';
import axios from 'axios';

const baseURL = 'https://65fe432cb2a18489b385e076.mockapi.io/api/campers';

const axiosInstance = axios.create({
  baseURL,
});

const ENDPOINTS = Object.freeze({
  getAll: '/adverts',
});

export const getAllAdverts = createAsyncThunk(
  'adverts/getAll',
  async ({ page, limit, searchParams }, thunkAPI) => {
    const axiosParams = {
      page,
      limit,
    };

    gerAllSearchParams(searchParams, axiosParams);

    try {
      const { data } = await axiosInstance.get(ENDPOINTS.getAll, {
        params: axiosParams,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTotal = createAsyncThunk(
  'adverts/getTotal',
  async (searchParams, thunkAPI) => {
    const axiosParams = {};

    gerAllSearchParams(searchParams, axiosParams);

    try {
      const { data } = await axiosInstance.get(ENDPOINTS.getAll, {
        params: axiosParams,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
