import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { BsTrash, BsPersonCircle, BsPen } from 'react-icons/bs';

import { Modal } from 'components/Modal/Modal';
import { Loading } from 'components/Loading/Loading';
import {
  List,
  Item,
  Span,
  Button,
  Error,
  Container,
  Img,
  ContainerImg,
} from './ContactList.styled';

import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { filterListContacts } from 'redux/filter/selectors';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import image from '../../images/astronavt (1).png';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactList = useSelector(filterListContacts);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idContact, setIdContact] = useState(null);

  const openModal = id => {
    setIdContact(id);
    setIsOpenModal(true);
  };
  const toggleModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deletContact = idContact => {
    dispatch(deleteContact(idContact));
    toast.info(' Contact deleted. ✅ ');
  };

  return (
    <Container>
      {contactList.length > 0 ? (
        <List>
          {isLoading && <Loading visible={isLoading} />}
          {error && <Error>{error}</Error>}
          {contactList.map(({ id, name, number }) => (
            <Item key={id} id={id}>
              <Span>
                <BsPersonCircle />
              </Span>
              <Span>{name} </Span>
              <Span>{number}</Span>
              <Button
                type="button"
                disabled={isLoading}
                onClick={() => openModal(id)}
              >
                <BsPen />
              </Button>
              <Button
                type="button"
                disabled={isLoading}
                onClick={() => deletContact(id)}
              >
                <BsTrash />
              </Button>
            </Item>
          ))}
        </List>
      ) : (
        <ContainerImg>
          <Img src={image} alt="ast" />
        </ContainerImg>
      )}
      {isOpenModal && <Modal onClose={toggleModal} id={idContact} />}
    </Container>
  );
};
