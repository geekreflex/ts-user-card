import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../styles/DefaultStyles';

const Nav = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <Wrapper>
      <Container>
        <NavInner>
          {links.map((link, i) => (
            <NavLink key={i} to={link.path} end={link.path === '/'}>
              <p>{link.name}</p>
            </NavLink>
          ))}
        </NavInner>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const NavInner = styled.div`
  display: flex;
`;

export default Nav;
