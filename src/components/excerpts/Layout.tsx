import { TfiLayoutGrid2, TfiLayoutListPost } from 'react-icons/tfi';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setLayout } from '../../features/userSlice';

const Layout = () => {
  const { layout } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  window.addEventListener('resize', () => {
    if (window.innerWidth < 600) {
      dispatch(setLayout('grid'));
    }
  });

  type Props = {
    name: string;
    alias: 'grid' | 'list';
    icon: JSX.Element;
  };

  const layouts: Props[] = [
    { name: 'List', alias: 'list', icon: <TfiLayoutListPost /> },
    { name: 'Grid', alias: 'grid', icon: <TfiLayoutGrid2 /> },
  ];
  return (
    <Wrapper>
      {layouts.map((item) => (
        <Lay
          key={item.alias}
          active={layout === item.alias}
          onClick={() => dispatch(setLayout(item.alias))}
        >
          {item.icon}
        </Lay>
      ))}
    </Wrapper>
  );
};

interface LayProps {
  active: boolean;
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.cardBg};
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  height: 40px;
  width: 140px;
  border-radius: 20px;
  align-items: center;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  overflow: hidden;

  @media (max-width: 600px) {
    display: none;
  }
`;
const Lay = styled.div<LayProps>`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.active ? props.theme.colors.text : '#888')};
  background-color: ${(props) =>
    props.active ? props.theme.colors.active : ''};

  :last-child {
    border-left: 1px solid ${(props) => props.theme.colors.border};
  }
`;

export default Layout;
