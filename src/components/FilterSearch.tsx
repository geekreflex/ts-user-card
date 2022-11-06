import { useState } from 'react';
import { IoCloseSharp, IoFilterSharp, IoSearchSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { Container, InputWrap } from '../styles/DefaultStyles';

const FilterSearch = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <Search />
          <Filter />
        </Inner>
      </Container>
    </Wrapper>
  );
};

const Search = () => {
  const [value, setValue] = useState('');
  return (
    <SearchWrap>
      <Input>
        <span>
          <IoSearchSharp />
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && (
          <span onClick={() => setValue('')}>
            <IoCloseSharp />
          </span>
        )}
      </Input>
    </SearchWrap>
  );
};

const Filter = () => {
  const filters = ['All Users', 'Active Users', 'Inactive Users'];
  const [show, setShow] = useState(false);

  return (
    <FilterWrap>
      <div className="filter-menu" onClick={() => setShow(!show)}>
        <span>
          <IoFilterSharp />
        </span>
        Filters
      </div>
      {show && (
        <div className="filter-dropdown">
          {filters.map((filter) => (
            <div className="filter">{filter}</div>
          ))}
        </div>
      )}
    </FilterWrap>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg};
  position: relative;
  z-index: 998;
  box-shadow: ${(props) => props.theme.cardShadow};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

const SearchWrap = styled.div``;
const FilterWrap = styled.div`
  position: relative;
  .filter-menu {
    border: 1px solid ${(props) => props.theme.colors.border};
    padding: 8px 15px;
    border-radius: ${(props) => props.theme.radius12};
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;

    span {
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .filter-dropdown {
    position: absolute;
    background-color: ${(props) => props.theme.colors.bg};
    border: 1px solid ${(props) => props.theme.colors.border};
    padding: 5px 0;
    width: 150px;
    margin-top: 5px;

    .filter {
      padding: 5px 10px;
      cursor: pointer;
      font-size: 14px;
      :hover {
        background-color: ${(props) => props.theme.colors.active};
      }
    }
  }
`;

const Input = styled(InputWrap)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  input {
    padding: 0 40px;
    width: 350px;
  }

  span {
    position: absolute;
    top: 14px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    :first-child {
      left: 12px;
    }
    :last-child {
      right: 12px;
      cursor: pointer;
      :hover {
        background-color: ${(props) => props.theme.colors.active};
      }
    }
  }
`;

export default FilterSearch;
