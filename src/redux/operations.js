import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
  } from "./phoneSlice";
axios.defaults.baseURL = "https://63c669f54ebaa8028545434e.mockapi.io";
export const fetchTasks = createAsyncThunk("contacts/fetchAll", async () => {
    const response = await axios.get("/contacts");
    return response.data;
  });