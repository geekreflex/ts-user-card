import { useEffect, useState } from 'react';
import {
  IoCheckmark,
  IoCheckmarkDone,
  IoCloseSharp,
  IoFilterSharp,
  IoRadio,
  IoRadioButtonOn,
  IoSearchSharp,
} from 'react-icons/io5';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setFilter, setSearch } from '../features/userSlice';
import { Container, InputWrap } from '../styles/DefaultStyles';

const FilterSearch = () => {
  const [fixed, setFixed] = useState(false);
  window.onscroll = () => {
    checkScroll();
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const checkScroll = () => {
    const top = window.scrollY;
    if (top >= 60) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  return (
    <Wrapper fixed={fixed}>
      <Container>
        <Inner fixed={fixed}>
          <Search />
          <Filter />
        </Inner>
      </Container>
    </Wrapper>
  );
};

const Search = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.user);
  return (
    <SearchWrap>
      <Input>
        <span>
          <IoSearchSharp />
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="Search for user..."
        />
        {search && (
          <span onClick={() => dispatch(setSearch(''))}>
            <IoCloseSharp />
          </span>
        )}
      </Input>
    </SearchWrap>
  );
};

const Filter = () => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.user);
  const filters = [
    { name: 'All Users', alias: 'all' },
    { name: 'Active Users', alias: 'active' },
    { name: 'Inactive Users', alias: 'inactive' },
  ];

  const onFilter = (filter: string) => {
    dispatch(setFilter(filter));
    setShow(false);
  };

  return (
    <FilterWrap>
      <div className="filter-menu" onClick={() => setShow(!show)}>
        <span>
          <IoFilterSharp />
        </span>
        <p>Filters</p>
      </div>
      {show && (
        <div className="filter-dropdown">
          {filters.map((item) => (
            <div className="filter" onClick={() => onFilter(item.alias)}>
              {item.name}
              {item.alias === filter && (
                <span>
                  <IoRadioButtonOn />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </FilterWrap>
  );
};

const Wrapper = styled.div<any>`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg};
  position: fixed;
  z-index: 998;
  box-shadow: ${(props) => (props) =>
    props.fixed ? props.theme.cardShadow : ''};
  top: 60px;
`;

const Inner = styled.div<any>`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 300ms;
  gap: 30px;
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
  @media (max-width: 768px) {
    .filter-menu {
      padding: 10px;
      span {
        margin: 0;
      }
      p {
        display: none;
      }
    }

    .filter-dropdown {
      right: 0;
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
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
        color: blue;
        display: flex;
        justify-content: center;
        align-items: center;
      }
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
    max-width: 100%;
    font-size: 14px;
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
