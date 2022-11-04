import React from 'react';
import { CiGrid2H, CiGrid41 } from 'react-icons/ci';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Wrapper>
      <Lay>
        <CiGrid2H />
      </Lay>
      <Lay>
        <CiGrid41 />
      </Lay>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  display: flex;
  height: 40px;
  width: 130px;
  border-radius: 20px;
  align-items: center;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
`;
const Lay = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #888;
  cursor: pointer;

  :last-child {
    border-left: 1px solid #ddd;
  }
`;

export default Layout;
