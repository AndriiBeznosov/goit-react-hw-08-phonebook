import { configureStore } from '@reduxjs/toolkit';

import { filtersSlice } from './slices/filterSlice';
import { contactsReduser } from './slices/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filtersSlice.reducer,
  },
});
