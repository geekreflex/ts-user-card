import styled from 'styled-components';
import CreateUpdateUserModal from '../components/CreateUpdateUserModal';
import DeleteUserModal from '../components/DeleteUserModal';
import UserList from '../components/UserList';
import { Container } from '../styles/DefaultStyles';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <CreateUpdateUserModal />
        <DeleteUserModal />
        <UserList />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
`;

export default Home;
