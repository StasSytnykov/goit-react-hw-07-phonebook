import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

// Actions

export const filterAction = filterSlice.actions;

// Selectors

export const onFilterChange = state => state.filter.filter;

export default filterSlice.reducer;
