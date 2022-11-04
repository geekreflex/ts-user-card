import React from 'react';
import styled from 'styled-components';
import { UserModel } from '../../types/userTypes';
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
import Avatar from '../excerpts/Avatar';

type Props = {
  user: UserModel;
};
const UserCardGrid = ({ user }: Props) => {
  return (
    <CardWrap>
      <div className="user-info">
        <Avatar />
        <div className="user-details">
          <div className="user-name">
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
          </div>
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
    </CardWrap>
  );
};

const CardWrap = styled.div`
  background-color: white;
  box-shadow: ${(props) => props.theme.cardShadow};
  padding: 20px;
  border-radius: ${(props) => props.theme.borderRadius};

  .user-info {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;

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
    justify-content: flex-end;
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

export default UserCardGrid;
