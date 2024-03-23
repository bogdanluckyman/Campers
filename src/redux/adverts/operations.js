import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS, axiosInstance } from "api";
import { gerAllSearchParams } from "helpers";

export const getAllAdverts = createAsyncThunk(
  "adverts/getAll",
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
  "adverts/getTotal",
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
