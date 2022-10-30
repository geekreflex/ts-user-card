import styled from 'styled-components';
import { UserModel } from '../types/userTypes';

type UserProps = {
  user: UserModel;
};

const User = ({ user }: UserProps) => {
  return (
    <Wrapper>
      <p>{user.firstName}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default User;
