const { createSlice } = require('@reduxjs/toolkit');

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterContacts } = filtersSlice.actions;
