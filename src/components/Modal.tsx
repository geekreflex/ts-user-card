import styled from 'styled-components';

type ModalProps = {
  children?: JSX.Element | JSX.Element[];
  visible: boolean;
  onClose: any;
};

type HeaderProps = {
  title?: string;
  onClose?: any;
};

type DefProps = {
  children: JSX.Element | JSX.Element[];
};
interface VisibleProps {
  readonly visible: boolean;
}

const Modal = ({ children, visible, onClose }: ModalProps) => {
  return (
    <Wrapper visible={visible}>
      <Overlay onClick={onClose} />
      <MainModal>{children}</MainModal>
    </Wrapper>
  );
};

export const ModalHeader = ({ title, onClose }: HeaderProps) => {
  return (
    <HeaderWrap>
      <h3>{title}</h3>
      <Close onClick={onClose}>
        <span>&times;</span>
      </Close>
    </HeaderWrap>
  );
};

export const ModalFooter = ({ children }: DefProps) => {
  return <FooterWrap>{children}</FooterWrap>;
};

export const ModalContent = ({ children }: DefProps) => {
  return <ContentWrap>{children}</ContentWrap>;
};

const Wrapper = styled.div<VisibleProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-start;
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
  background-color: ${(props) => props.theme.colors.bg};
  position: relative;
  margin-top: 100px;
  padding: 0 10px;
  border-radius: 5px;
`;

const ContentWrap = styled.div`
  padding: 20px 10px;
`;
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 0 10px;
`;
const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 10px;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

const Close = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;

  :hover {
    background-color: #eee;
  }
`;

export default Modal;
