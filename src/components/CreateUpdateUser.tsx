import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { closeModal } from '../features/modalSlice';
import { InputWrap } from '../styles/DefaultStyles';
import { Input, TextArea } from './excerpts/Input';
import Modal from './Modal';

const CreateUpdateUser = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);

  const onClose = () => {
    dispatch(closeModal());
  };
  return (
    <Modal title="Create New User" onClose={onClose} visible={isOpen}>
      <Main>
        <InputSplit>
          <Input label="First name" type="password" />
          <Input label="Last name" />
        </InputSplit>
        <TextArea label="Bio" />
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
