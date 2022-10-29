import 'styled-components';

// extend
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: number;
    colors: {
      main: string;
      secondary: string;
    };
  }
}
