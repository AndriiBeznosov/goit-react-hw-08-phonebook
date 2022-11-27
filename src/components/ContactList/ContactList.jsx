import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Loading } from 'components/Loading/Loading';
import { List, Item, Span, Button } from './ContactList.styled';

import { fetchContacts, deleteContact } from 'redux/operations';
import { filterListContacts, getError, getIsLoading } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contactList = useSelector(filterListContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deletContact = idContact => {
    dispatch(deleteContact(idContact));
    toast.info(' Contact deleted. ✅ ');
  };

  return (
    <List>
      {isLoading && <Loading visible={isLoading} />}
      {error && <p>{error}</p>}
      {contactList.map(({ id, name, phone }) => (
        <Item key={id} id={id}>
          <Span>{name} </Span>
          <Span>{phone}</Span>
          <Button
            type="button"
            disabled={isLoading}
            onClick={() => deletContact(id)}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
