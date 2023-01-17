import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from "./operations";
const phoneSlice = createSlice({
  name: 'phone',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    addContact(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(todo => todo.id !== payload);
    },
    
  },
  extraReducers: {
    [fetchTasks.pending](state) {
        state.isLoading = true;
        state.error = null;
    },
    [fetchTasks.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact, fetchingInProgress, fetchingSuccess, fetchingError } = phoneSlice.actions;

export const phoneReducer = phoneSlice.reducer;
