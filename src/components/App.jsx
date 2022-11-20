import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

import { Wrapper, Container } from './App.styled';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Caption } from './Title/Title';
import { ContainerToast } from './ToastContainer/ToastContainer';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addTodo = user => {
    if (!user) {
      return;
    }
    const number = contacts.contacts.map(contact => contact.number);

    if (number.includes(user.number)) {
      toast.error(`${user.number} is already in the contacts. ❌`);
      return;
    }
    user.id = nanoid();
    dispatch(addContacts(user));

    toast.success(' Contact addano. ✅');
  };

  return (
    <Wrapper>
      <Caption title="Phonebook" />
      <ContactForm onSubmit={addTodo} />
      <Container>
        <Caption title="Contacts" />
        <Filter />
        <ContactList />
      </Container>
      <ContainerToast />
    </Wrapper>
  );
};
