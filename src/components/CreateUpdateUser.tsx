import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { closeModal } from '../features/modalSlice';
import { Input, TextArea } from './excerpts/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal, { ModalContent, ModalFooter, ModalHeader } from './Modal';
import { Button, ButtonClear } from '../styles/DefaultStyles';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  bio: yup.string(),
});

const CreateUpdateUser = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);
  const method = useForm({ resolver: yupResolver(schema) });
  const { handleSubmit } = method;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onClose = () => {
    dispatch(closeModal());
  };
  return (
    <Modal onClose={onClose} visible={isOpen}>
      <Main>
        <ModalHeader title="Create New User" onClose={onClose} />
        <ModalContent>
          <InputSplit>
            <Input label="First name" name="firstName" method={method} />
            <Input label="Last name" name="lastName" method={method} />
          </InputSplit>
          <TextArea label="Bio" name="bio" method={method} />
        </ModalContent>
        <ModalFooter>
          <ButtonClear>Clear all</ButtonClear>
          <Button>Submit Data</Button>
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
  margin-bottom: 20px;
`;
export default CreateUpdateUser;
