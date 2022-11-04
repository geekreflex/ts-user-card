import styled from 'styled-components';
import { UserModel } from '../types/userTypes';
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5';

type UserProps = {
  user: UserModel;
  dragStart: any;
  dragEnter: any;
  drop: any;
  index: number;
};

const User = ({ user, dragStart, dragEnter, drop, index }: UserProps) => {
  return (
    <Wrapper
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={drop}
      draggable
    >
      <div className="user-info">
        <div className="avatar">
          <span></span>
        </div>
        <div className="user-details">
          <span className="user-name">
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
          </span>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="user-action">
        <span>
          <IoPencilOutline />
        </span>
        <span>
          <IoTrashOutline />
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: ${(props) => props.theme.borderRadius};
  height: 80px;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-info {
    display: flex;
    align-items: center;
    gap: 10px;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #999;
    }
    .user-details {
      display: flex;
      flex-direction: column;

      .user-name {
        display: flex;
        gap: 10px;
        font-weight: 600;
      }
    }
  }

  .user-action {
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
`;

export default User;
