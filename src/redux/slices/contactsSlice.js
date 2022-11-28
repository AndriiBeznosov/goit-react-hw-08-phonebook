import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';

const hendlePending = state => {
  state.isLoading = true;
};
const hendleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: hendlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: hendleRejected,
    [addContact.pending]: hendlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: hendleRejected,
    [deleteContact.pending]: hendlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const indecContact = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(indecContact, 1);
    },
    [deleteContact.rejected]: hendleRejected,
  },
});

export const contactsReduser = contactsSlice.reducer;
