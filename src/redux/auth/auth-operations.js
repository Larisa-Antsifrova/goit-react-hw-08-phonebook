import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const registerUser = user => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', user);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const loginUser = user => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/users/login', user);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logoutUser = () => dispatch => {};

const getCurrentUser = () => dispatch => {};

export { registerUser, loginUser };
