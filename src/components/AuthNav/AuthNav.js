import React from 'react';

import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AuthNav = () => {
  return (
    <div>
      <NavLink to={routes.register}>Register</NavLink>
      <NavLink to={routes.login}>Login</NavLink>
    </div>
  );
};

export default AuthNav;
