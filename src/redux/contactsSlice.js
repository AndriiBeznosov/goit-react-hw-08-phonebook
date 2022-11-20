import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsDefault from '../contants/contactsDefault.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: contactsDefault },
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    removeContacts(state, action) {
      const indecContact = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(indecContact, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts-list',
  storage,
};

export const persistedClickReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContacts, removeContacts } = contactsSlice.actions;
