import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import User from './User';

const UserList = () => {
  const { users } = useAppSelector((state) => state.user);
  return (
    <Wrapper>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default UserList;
