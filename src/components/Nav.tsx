import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { openModal } from '../features/modalSlice';
import { Button, Container } from '../styles/DefaultStyles';
import Layout from './excerpts/Layout';

const Nav = () => {
  const dispatch = useAppDispatch();

  const onAddUser = () => {
    dispatch(openModal());
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
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
`;

export default Nav;
