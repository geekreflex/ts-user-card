import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import CreateUpdateUser from './CreateUpdateUser';

type Props = {
  children?: JSX.Element;
};

const Modal = ({ children }: Props) => {
  const { view } = useAppSelector((state) => state.modal);
  return (
    <Wrapper>
      <Overlay />
      <MainModal>
        <InnerModal>
          {view === 'create_update_user' && <CreateUpdateUser />}
        </InnerModal>
      </MainModal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
const MainModal = styled.div`
  min-width: 350px;
  min-height: 100px;
  max-height: 80vh;
  max-width: 600px;
  background-color: #fff;
  position: relative;
  margin-top: 100px;
`;
const InnerModal = styled.div``;

export default Modal;
