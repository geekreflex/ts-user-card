import { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getUsersFromStorage } from '../features/userSlice';
import User from './User';

const UserList = () => {
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);

  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
    e.target.classList.add('drag-start');
  };

  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
    // e.target.classList.add('drag-enter');
  };

  const drop = (e: any) => {
    const copyUserList = [...users];
    const dragItemContent = copyUserList[dragItem.current];
    copyUserList.splice(dragItem.current, 1);
    copyUserList.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    localStorage.setItem('app-users', JSON.stringify(copyUserList));
    dispatch(getUsersFromStorage());
    e.target.classList.remove('drag-start');
  };

  return (
    <Wrapper>
      {users.map((user, index) => (
        <User
          key={user.id}
          user={user}
          dragStart={dragStart}
          index={index}
          dragEnter={dragEnter}
          drop={drop}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default UserList;
