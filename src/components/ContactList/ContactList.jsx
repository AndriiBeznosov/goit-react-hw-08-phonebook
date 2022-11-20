import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { List, Item, Span, Button } from './ContactList.styled';
import { removeContacts } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contactListRedux = useSelector(getContacts);
  const filterName = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterListContacts = contactListRedux.contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filterName.toLowerCase());
  });

  const deleteFilterContact = idContact => {
    return contactListRedux.contacts.filter(contact => {
      if (contact.id === idContact) {
        toast.info(' Contact deleted. ✅ ');
      }
      return contact.id !== idContact;
    });
  };

  const deletContact = idContact => {
    dispatch(removeContacts(deleteFilterContact(idContact)));
  };

  return (
    <List>
      {filterListContacts.map(({ id, name, number }) => (
        <Item key={id} id={id}>
          <Span>{name} </Span>
          <Span>{number}</Span>
          <Button
            type="button"
            onClick={() => {
              deletContact(id);
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
