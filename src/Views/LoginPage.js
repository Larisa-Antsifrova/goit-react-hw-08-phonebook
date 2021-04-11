// Imports from React
import React from 'react';
// Imports of components
import Section from '../components/Section';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <Section>
      <Main>
        <PageTitle title="Please, log in:" />
        <LoginForm />
      </Main>
    </Section>
  );
};

export default LoginPage;
