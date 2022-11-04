import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  borderRadius: '5px',
  radius12: '12px',
  shadow: 'rgba(0, 0, 0, 0.28) 0px 8px 28px !important',
  cardShadow: '0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);',
  colors: {
    main: '#222222',
    secondary: '#777777',
    bg: '#ffffff',
    border: '#ddd',
    btnBgDef: '#222222',
    btnColorDef: '#ffffff',
    danger: 'rgb(230, 0, 0)',
  },
};

export const darkTheme = {
  borderRadius: '5px',
  radius12: '12px',
  shadow: 'rgba(0, 0, 0, 0.28) 0px 8px 28px !important',
  cardShadow: '0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);',

  colors: {
    main: '#fafafa',
    secondary: '#f1f1f1',
    bg: '#202124',
    border: '#444444',
    btnBgDef: '#ffffff',
    btnColorDef: '#222222',
    danger: 'rgb(230, 0, 0)',
  },
};
