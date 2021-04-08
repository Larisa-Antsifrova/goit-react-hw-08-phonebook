import React from 'react';
// Imports of components
import Section from '../components/Section';
import PageTitle from '../components/PageTitle';
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import Main from '../components/Main';

const App = () => {
  return (
    <>
      <Main>
        <PageTitle title="Phone Book" />
        <Section>
          <Title title="Add contacts" />
          <ContactForm />
          <Title title="Сontacts" />
          <Filter />
          <ContactList />
        </Section>
      </Main>
    </>
  );
};

export default App;
