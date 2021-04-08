import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const initialUserState = { name: null, email: null };

const user = createReducer();

const token = createReducer();

const error = createReducer();

export default combineReducers({
  user,
  token,
  error,
});
