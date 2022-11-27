import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact } from 'redux/operations';
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
    const number = contacts.map(contact => contact.phone);

    if (number.includes(user.phone)) {
      toast.error(`${user.phone} is already in the contacts. ❌`);
      return;
    }
    user.id = nanoid();
    const { name, phone, id } = user;
    dispatch(addContact({ name, phone, id }));

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
