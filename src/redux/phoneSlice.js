import { createSlice } from '@reduxjs/toolkit';

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
    fetchingInProgress(state) {
        state.isLoading = true;
        state.error = null;
    },
    
    fetchingSuccess(state, {payload}) {
        state.isLoading = false;
        state.error = null;
      state.items = payload;
    },
    
    fetchingError(state, {payload}) {
        state.isLoading = false;
        state.error = payload;
    },
  },
});

export const { addContact, deleteContact, fetchingInProgress, fetchingSuccess, fetchingError } = phoneSlice.actions;

export const phoneReducer = phoneSlice.reducer;
