import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { useEffect } from 'react';
import { Wrapper, Container, Img, ContainerImg } from './AppContacts.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Caption } from '../UI/Title/Title';
import { ContainerToast } from '../UI/ToastContainer/ToastContainer';
import image from '../../images/astronavt (1).png';
import { filterListContacts } from 'redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export const AppContacts = () => {
  const contactList = useSelector(filterListContacts);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {contactList.length > 0 ? (
        <ContactList contactList={contactList} />
      ) : (
        <ContainerImg>
          <Img src={image} alt="ast" />
        </ContainerImg>
      )}
      <ContainerToast />
    </Wrapper>
  );
};
