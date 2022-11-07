import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getUsersFromStorage } from '../features/userSlice';
import { UserModel } from '../types/userTypes';
import User from './User';

const UserList = () => {
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);
  const dispatch = useAppDispatch();
  const { users, layout, search, filter } = useAppSelector(
    (state) => state.user
  );
  const [filteredUser, setFilteredUser] = useState<UserModel[]>([]);

  useEffect(() => {
    let filtered = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(search) ||
        user.lastName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.bio.toLowerCase().includes(search)
    );
    setFilteredUser(filtered);
  }, [search, users]);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredUser(users);
    }

    if (filter === 'active') {
      let allActiveUsers = users.filter((user) => user.active === true);
      setFilteredUser(allActiveUsers);
    }

    if (filter === 'inactive') {
      let allActiveUsers = users.filter((user) => user.active === false);
      setFilteredUser(allActiveUsers);
    }
  }, [filter, users]);

  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
    e.target.classList.add('drag-start');
  };

  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
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
      {layout === 'grid' && (
        <GridView>
          {filteredUser.map((user, index) => (
            <User
              key={user.id}
              user={user}
              dragStart={dragStart}
              index={index}
              dragEnter={dragEnter}
              drop={drop}
            />
          ))}
        </GridView>
      )}
      {layout === 'list' && (
        <ListView>
          {filteredUser?.map((user, index) => (
            <User
              key={user.id}
              user={user}
              dragStart={dragStart}
              index={index}
              dragEnter={dragEnter}
              drop={drop}
            />
          ))}
        </ListView>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 150px 0 50px 0;
`;

const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
`;
const ListView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default UserList;
