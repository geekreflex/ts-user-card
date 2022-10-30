import styled from 'styled-components';
import CreateUpdateUser from '../components/CreateUpdateUser';
import UserList from '../components/UserList';
import { Container } from '../styles/DefaultStyles';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <CreateUpdateUser />
        <UserList />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
`;

export default Home;
