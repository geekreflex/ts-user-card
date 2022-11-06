import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleDeleteModal } from '../features/modalSlice';
import { deleteUser } from '../features/userSlice';
import { ButtonDanger, InputWrap } from '../styles/DefaultStyles';
import Modal, { ModalContent, ModalFooter, ModalHeader } from './Modal';

const DeleteUserModal = () => {
  const dispatch = useAppDispatch();
  const { deleteModal } = useAppSelector((state) => state.modal);
  const [value, setValue] = useState('');
  const { user } = useAppSelector((state) => state.user);

  const onClose = () => {
    dispatch(toggleDeleteModal(false));
    setValue('');
  };

  const onDelete = () => {
    dispatch(deleteUser());
    onClose();
  };

  const isValue = () => {
    if (value.toLowerCase() === user.email.toLowerCase()) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Modal onClose={onClose} visible={deleteModal}>
      <Main>
        <ModalHeader title="Delete" onClose={onClose} />
        <ModalContent>
          <Text>
            <p>
              This action <span>cannot</span> be undone.
            </p>
            <p>
              please type <span>{user.email}</span> to confirm
            </p>
          </Text>
          <InputWrap>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
          </InputWrap>
        </ModalContent>
        <ModalFooter>
          <BtnWrap>
            <ButtonDanger onClick={onDelete} disabled={isValue()}>
              Delete
            </ButtonDanger>
          </BtnWrap>
        </ModalFooter>
      </Main>
    </Modal>
  );
};

export default DeleteUserModal;

export const Main = styled.div`
  max-width: 100%;
  width: 400px;
`;

export const Text = styled.div`
  margin-bottom: 10px;
  p {
    font-size: 14px;
    span {
      font-weight: 600;
    }
  }
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
