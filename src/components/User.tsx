import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { UserModel } from '../types/userTypes';
import UserCardGrid from './card/UserCardGrid';
import UserCardList from './card/UserCardList';

type UserProps = {
  user: UserModel;
  dragStart: any;
  dragEnter: any;
  drop: any;
  index: number;
};

const User = ({ user, dragStart, dragEnter, drop, index }: UserProps) => {
  const { layout } = useAppSelector((state) => state.user);
  return (
    <Wrapper
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={drop}
      draggable
    >
      {layout === 'list' && <UserCardList user={user} />}
      {layout === 'grid' && <UserCardGrid user={user} />}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default User;
