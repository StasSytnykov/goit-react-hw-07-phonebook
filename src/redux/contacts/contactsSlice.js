import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
  contacts: [],
  filter: '',
};

// Slice

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ab8a00a62365888bde1cf6.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { useGetContactsQuery, useAddContactMutation } = contactsApi;

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
