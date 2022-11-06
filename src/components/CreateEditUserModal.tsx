import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleCreateModal } from '../features/modalSlice';
import { Input, TextArea } from './excerpts/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal, { ModalContent, ModalFooter, ModalHeader } from './Modal';
import { Button, ButtonClear } from '../styles/DefaultStyles';
import { nanoid } from 'nanoid';
import { addUser, editUser, resetUser } from '../features/userSlice';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email'),
  bio: yup.string(),
});

const CreateEditUserModal = () => {
  const dispatch = useAppDispatch();
  const { createModal, editMode } = useAppSelector((state) => state.modal);
  const { user } = useAppSelector((state) => state.user);

  const method = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      bio: user.bio,
    },
  });
  const { handleSubmit, reset } = method;

  const onSubmit = async (data: any) => {
    const payload = {
      id: nanoid(),
      ...data,
      active: true,
    };
    if (editMode) {
      dispatch(editUser({ id: user.id, ...data, active: user.active }));
    } else {
      dispatch(addUser(payload));
    }
    onClose();
    onClearAll();
  };

  const onClose = () => {
    dispatch(toggleCreateModal(false));
    dispatch(resetUser());
    onClearAll();
  };

  const onClearAll = () => {
    reset({ firstName: '', lastName: '', bio: '', email: '' });
  };

  return (
    <Modal onClose={onClose} visible={createModal}>
      <Main>
        <ModalHeader title="Create New User" onClose={onClose} />
        <ModalContent>
          <FormWrap>
            <InputSplit>
              <Input label="First name" name="firstName" method={method} />
              <Input label="Last name" name="lastName" method={method} />
            </InputSplit>
            <Input label="Email" method={method} name="email" />
            <TextArea label="Bio" name="bio" method={method} />
          </FormWrap>
        </ModalContent>
        <ModalFooter>
          <ButtonClear onClick={() => onClearAll()}>Clear all</ButtonClear>
          <Button onClick={handleSubmit(onSubmit)}>Submit Data</Button>
        </ModalFooter>
      </Main>
    </Modal>
  );
};

const Main = styled.div`
  width: 800px;
  max-width: 100%;
`;

const InputSplit = styled.div`
  display: flex;
  gap: 20px;
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export default CreateEditUserModal;
