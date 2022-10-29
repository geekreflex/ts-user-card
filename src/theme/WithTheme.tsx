import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './schema';

type Props = {
  children: JSX.Element;
};

const WithTheme = ({ children }: Props) => {
  const mode: string = 'light';

  const renderTheme = () => {
    switch (mode) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      default:
        return lightTheme;
    }
  };

  return <ThemeProvider theme={renderTheme()}>{children}</ThemeProvider>;
};

export default WithTheme;
