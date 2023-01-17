import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63c669f54ebaa8028545434e.mockapi.io";
export const fetchTasks = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
   try {
    const response = await axios.get("/contacts");
    return response.data;
   } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
   }
  });