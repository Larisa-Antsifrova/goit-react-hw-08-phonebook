import React from 'react';
import { AppBar as PhoneBookBar } from '@material-ui/core';
import Container from '../Container';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

const AppBar = () => {
  return (
    <PhoneBookBar position="static">
      <Container maxWidth="md">
        <Navigation />
        <UserMenu />
        <AuthNav />
      </Container>
    </PhoneBookBar>
  );
};

export default AppBar;
