import { ThemeProvider } from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { lightTheme, darkTheme } from './schema';

type Props = {
  children: JSX.Element;
};

const WithTheme = ({ children }: Props) => {
  const { theme } = useAppSelector((state) => state.user);

  const renderTheme = () => {
    switch (theme) {
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
