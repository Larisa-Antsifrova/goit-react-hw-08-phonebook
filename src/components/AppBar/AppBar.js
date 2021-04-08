import React from 'react';
import { AppBar as PhoneBookBar } from '@material-ui/core';
import Container from '../Container';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

const AppBar = () => {
  return (
    <PhoneBookBar position="static">
      <Container maxWidth="md">
        <Navigation />
        <UserMenu />
      </Container>
    </PhoneBookBar>
  );
};

export default AppBar;
