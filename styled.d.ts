import 'styled-components';

// extend
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
  }
}
