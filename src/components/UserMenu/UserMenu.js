import React from 'react';

import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const UserMenu = () => {
  return (
    <div>
      <span>User info</span>
      <NavLink exact to={routes.home}>
        Log out
      </NavLink>
      <NavLink to={routes.register}>Register</NavLink>
      <NavLink to={routes.login}>Login</NavLink>
    </div>
  );
};

export default UserMenu;
