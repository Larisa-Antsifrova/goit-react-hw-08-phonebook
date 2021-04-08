import React from 'react';

import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './Navigation.module.css';

const Navigation = () => {
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
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.contacts}
            className={styles.NavLink}
            // activeClassName={styles['NavLink-active']}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
