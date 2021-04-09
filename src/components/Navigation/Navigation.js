import React from 'react';

import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import Logo from '../Logo';

// Imports from Redux
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul className={styles.NavLinksList}>
        <li>
          <NavLink
            exact
            to={routes.home}
            className={styles.NavLink}
            // activeClassName={styles['NavLink-active']}
          >
            <Logo />
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={routes.home}
            className={styles.NavLink}
            activeClassName={styles['NavLink-active']}
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li>
            <NavLink
              to={routes.contacts}
              className={styles.NavLink}
              activeClassName={styles['NavLink-active']}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
