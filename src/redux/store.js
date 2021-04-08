// Imports from Redux Toolkit
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// Imports of middleware
import logger from 'redux-logger';
// Imports of reducers
import { contactsReducer } from './contacts/contacts-reducers';
import { authReducer } from './auth/auth-reducers';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
