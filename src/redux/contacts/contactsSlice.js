import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

// Slice

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },

    deleteContact: (state, { payload }) => {
      const index = state.contacts.findIndex(
        contact => contact.id !== payload.id
      );
      state.contacts.splice(index, 1);
    },

    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

// Actions

export const { addContact, deleteContact, changeFilter } = contactSlice.actions;

// Selectors

export const getContact = state => state.contacts;
export const onFilterChange = state => state.filter;

export default contactSlice.reducer;
