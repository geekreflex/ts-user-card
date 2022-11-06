import { BiPencil } from 'react-icons/bi';
import { IoTrashOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  toggleCreateModal,
  toggleDeleteModal,
  toggleEditMode,
} from '../features/modalSlice';
import { setUser, toggleStatus } from '../features/userSlice';
import { UserModel } from '../types/userTypes';
import Avatar from './excerpts/Avatar';
import Switch from './excerpts/Switch';

type UserProps = {
  user: UserModel;
  dragStart: any;
  dragEnter: any;
  drop: any;
  index: number;
};

const User = ({ user, dragStart, dragEnter, drop, index }: UserProps) => {
  const dispatch = useAppDispatch();
  const { layout } = useAppSelector((state) => state.user);

  const onDeleteUser = (id: string) => {
    dispatch(toggleDeleteModal(true));
    dispatch(setUser(id));
  };

  const onEditUser = (id: string) => {
    dispatch(toggleCreateModal(true));
    dispatch(setUser(id));
    dispatch(toggleEditMode(true));
  };

  return (
    <Wrapper
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={drop}
      onTouchStart={(e) => dragStart(e, index)}
      draggable
      view={layout}
      disabled={!user.active}
    >
      <div className="user-info">
        <Avatar />
        <div className="user-details">
          <div className="user-name">
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
          </div>
          <p className="user-email">{user.email}</p>
        </div>
      </div>
      <div className="user-action">
        <div>
          <Switch
            checked={user.active}
            name={user.id}
            onCheck={() => dispatch(toggleStatus(user.id))}
          />
        </div>
        <div className="user-btns">
          <span onClick={() => onEditUser(user.id)}>
            <BiPencil />
          </span>
          <span onClick={() => onDeleteUser(user.id)}>
            <IoTrashOutline />
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

interface WrapProp {
  disabled: boolean;
  view: string;
}

const Wrapper = styled.div<WrapProp>`
  background-color: #fff;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.border};
  opacity: ${(props) => (props.disabled ? '.6' : '1')};
  box-shadow: ${(props) => (props.disabled ? '' : props.theme.cardShadow)};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.view === 'grid' ? 'column' : 'rol')};
  gap: 20px;

  .user-info {
    display: flex;
    align-items: center;
    gap: 10px;
    .user-details {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 70%;
      overflow: hidden;

      .user-name {
        display: flex;
        gap: 10px;
        font-weight: 600;
      }
      .user-email {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .user-action {
    display: flex;
    justify-content: ${(props) =>
      props.view === 'grid' ? 'space-between' : ''};
    align-items: center;
    gap: 80px;
    .user-btns {
      display: flex;
      gap: 20px;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        color: #888;

        :hover {
          background-color: #eee;
        }
      }
    }
  }
`;

export default User;
