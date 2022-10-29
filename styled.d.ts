import 'styled-components';

// extend
declare module 'styled-components' {
  export interface View {
    visible: boolean;
  }
}
