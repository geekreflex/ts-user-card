import styled from 'styled-components';

type Props = {
  children?: JSX.Element;
  title: string;
  visible: boolean;
  onClose: any;
};

const Modal = ({ children, title, visible, onClose }: Props) => {
  return (
    <Wrapper visible={visible}>
      <Overlay onClick={onClose} />
      <MainModal>
        <InnerModal>
          <ModalHeader>
            <h3>{title}</h3>
            <Close onClick={onClose}>
              <span>&times;</span>
            </Close>
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
          <ModalFooter></ModalFooter>
        </InnerModal>
      </MainModal>
    </Wrapper>
  );
};

interface VisibleProps {
  readonly visible: boolean;
}

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
  padding: 10px;
  border-radius: 5px;
`;
const InnerModal = styled.div``;

const ModalContent = styled.div`
  padding: 20px 10px;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 0 10px;
`;
const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
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

  :hover {
    background-color: #eee;
  }
  span {
    font-size: 24px;
    cursor: pointer;
  }
`;

export default Modal;
