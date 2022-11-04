import styled from 'styled-components';
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
import { UserModel } from '../../types/userTypes';
import Avatar from '../excerpts/Avatar';

type Props = {
  user: UserModel;
};

const UserCardList = ({ user }: Props) => {
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
  background-color: #fff;
  border-radius: ${(props) => props.theme.borderRadius};
  height: 80px;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.cardShaodw};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-info {
    display: flex;
    align-items: center;
    gap: 10px;
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

export default UserCardList;
