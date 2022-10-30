import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<any>`
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

/* This only changes this particular animation duration */
.animate__animated.animate__bounce {
  --animate-duration: 2s;
}

/* This changes all the animations globally */
:root {
  --animate-duration: 300ms;
  --animate-delay: 0.5s;
}

body {
  color: ${(props) => props.theme.colors.main};
}




`;
