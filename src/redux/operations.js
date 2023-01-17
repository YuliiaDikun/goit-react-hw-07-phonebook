import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
  } from "./phoneSlice";
axios.defaults.baseURL = "https://63c669f54ebaa8028545434e.mockapi.io";
export const fetchTasks = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/contacts");
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};