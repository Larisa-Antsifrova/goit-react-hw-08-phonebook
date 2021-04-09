const getIsAuthenticated = state => !!state.auth.token;

const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;

export { getIsAuthenticated, getUserName, getUserEmail };
