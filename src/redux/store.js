import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import { contactsApi } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: { [contactsApi.reducerPath]: contactsApi.reducer, contactsReducer },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
