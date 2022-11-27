import { configureStore } from '@reduxjs/toolkit';

import { filtersSlice } from './filterSlice';
import { contactsReduser } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filtersSlice.reducer,
  },
});
