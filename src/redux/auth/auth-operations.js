import {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
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

const loginUser = () => dispatch => {};

const logoutUser = () => dispatch => {};

const getCurrentUser = () => dispatch => {};

export { registerUser };
