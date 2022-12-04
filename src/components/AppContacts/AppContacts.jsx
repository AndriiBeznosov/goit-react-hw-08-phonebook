import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { Wrapper, Container } from './AppContacts.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Caption } from '../Title/Title';
import { ContainerToast } from '../ToastContainer/ToastContainer';

export const AppContacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addTodo = contact => {
    if (!contact) {
      return;
    }
    const number = contacts.map(contact => contact.number);

    if (number.includes(contact.number)) {
      toast.error(`${contact.number} is already in the contacts. ❌`);
      return;
    }
    contact.id = nanoid();
    // const { name, number, id } = contact;
    dispatch(addContact(contact));

    toast.success(' Contact addano. ✅');
  };

  return (
    <Wrapper>
      <Caption title="Phonebook" />
      <ContactForm onSubmit={addTodo} text={'Add contact'} />
      <Container>
        <Caption title="Contacts" />
        <Filter />
      </Container>
      <ContactList />
      <ContainerToast />
    </Wrapper>
  );
};
