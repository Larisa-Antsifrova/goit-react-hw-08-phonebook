import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import { getUserName, getUserEmail } from '../../redux/auth/auth-selectors';
import { logoutUser } from '../../redux/auth/auth-operations';

const UserMenu = ({ userName, userEmail, onLogout }) => {
  return (
    <div>
      <span>Hello, {userEmail}!</span>
      <NavLink exact to={routes.home} onClick={onLogout}>
        Log out
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => ({
  userName: getUserName(state),
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
