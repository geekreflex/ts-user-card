import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
color: ${(props) => props.theme.colors.main};
}

`;
