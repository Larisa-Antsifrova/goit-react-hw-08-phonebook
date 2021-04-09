import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import { getUserName } from '../../redux/auth/auth-selectors';

const UserMenu = ({ userName }) => {
  return (
    <div>
      <span>Hello, {userName}!</span>
      <NavLink exact to={routes.home}>
        Log out
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => ({
  userName: getUserName(state),
});

export default connect(mapStateToProps)(UserMenu);
