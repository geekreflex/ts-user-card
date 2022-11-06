import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import CreateEditUserModal from '../components/CreateEditUserModal';
import DeleteUserModal from '../components/DeleteUserModal';
import UserList from '../components/UserList';
import { Container } from '../styles/DefaultStyles';

const Home = () => {
  const { createModal } = useAppSelector((state) => state.modal);
  return (
    <Wrapper>
      <Container>
        {createModal && <CreateEditUserModal />}
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
