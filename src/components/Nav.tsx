import { IoAddSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { toggleCreateModal, toggleEditMode } from '../features/modalSlice';
import { Button, Container } from '../styles/DefaultStyles';
import Layout from './excerpts/Layout';

const Nav = () => {
  const dispatch = useAppDispatch();

  const onAddUser = () => {
    dispatch(toggleCreateModal(true));
    dispatch(toggleEditMode(false));
  };

  return (
    <Wrapper>
      <Container>
        <NavInner>
          <Link to="/">
            <Logo>
              &lt;Ts-User-Table /&gt;
              <span></span>
            </Logo>
          </Link>
          <Layout />
          <NavMain>
            <Button onClick={onAddUser}>Add User</Button>
          </NavMain>
        </NavInner>
      </Container>
      <AddPlus onClick={onAddUser}>
        <IoAddSharp />
      </AddPlus>
    </Wrapper>
  );
};

const Wrapper = styled.div<any>`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
`;

const NavInner = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Logo = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.colors.main};
  padding: 6px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.bg};

  span {
    position: absolute;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    border-radius: 5px;
    z-index: -1;
    left: 5px;
  }
`;

const NavMain = styled.div`
  display: flex;

  @media (max-width: 600px) {
    display: none;
  }
`;

const AddPlus = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 20px;
  background-color: ${(props) => props.theme.colors.main};
  width: 50px;
  height: 50px;
  color: #fff;
  font-size: 24px;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.cardShadow};

  @media (max-width: 600px) {
    display: flex;
  }
`;

export default Nav;
