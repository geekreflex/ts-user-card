import { IoAddSharp, IoHelp, IoMoonSharp, IoSunnySharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleCreateModal, toggleEditMode } from '../features/modalSlice';
import { setTheme } from '../features/userSlice';
import { Button, Container } from '../styles/DefaultStyles';
import Layout from './excerpts/Layout';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useAppSelector((state) => state.user);

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
          <Middle>
            {location.pathname === '/' && (
              <div
                className="theme-toggle help"
                onClick={() => navigate('/about')}
              >
                <IoHelp />
              </div>
            )}
            <Layout />
            <div
              className="theme-toggle"
              onClick={() =>
                dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
              }
            >
              {theme === 'light' ? <IoMoonSharp /> : <IoSunnySharp />}
            </div>
          </Middle>
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
  background-color: ${(props) => props.theme.colors.bg};
  z-index: 99998;
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
  border: 1px solid ${(props) => props.theme.colors.main}50;
  padding: 6px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.bg};

  span {
    position: absolute;
    border: 1px solid ${(props) => props.theme.colors.secondary}50;
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
  background-color: ${(props) => props.theme.colors.bg};
  width: 60px;
  height: 60px;
  font-size: 24px;
  border-radius: 50%;
  z-index: 9998;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.cardShadow};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.border};

  @media (max-width: 600px) {
    display: flex;
  }
`;

const Middle = styled.div`
  display: flex;
  align-items: center;

  .theme-toggle {
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.cardBg};
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    box-shadow: ${(props) => props.theme.cardShadow};
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
  }

  .help {
    margin-right: 20px;
    margin-left: 0;
  }
`;

export default Nav;
