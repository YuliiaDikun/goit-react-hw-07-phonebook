import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addContact, deleteContact } from "./operations";
const phoneSlice = createSlice({
  name: 'phone',
  initialState: { items: [], isLoading: false, error: null }, 
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

    [addContact.pending](state) {
        state.isLoading = true;
      },
      [addContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      },
      [addContact.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },

      [deleteContact.pending](state) {
        state.isLoading = true;
      },
      [deleteContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      },
      [deleteContact.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
  },
});

export const phoneReducer = phoneSlice.reducer;
