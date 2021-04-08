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
    </div>
  );
};

export default UserMenu;
