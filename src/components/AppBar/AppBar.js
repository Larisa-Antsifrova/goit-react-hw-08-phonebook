import React from 'react';
import { AppBar as PhoneBookBar } from '@material-ui/core';
import Container from '../Container';

import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AppBar = () => {
  return (
    <PhoneBookBar>
      <Container maxWidth="md">
        <div>Here comes App bar!</div>
      </Container>
    </PhoneBookBar>
  );
};

export default AppBar;
