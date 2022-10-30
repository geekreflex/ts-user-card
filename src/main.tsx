import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import WithTheme from './theme/WithTheme';
import { getUsersFromStorage } from './features/userSlice';

store.dispatch(getUsersFromStorage());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WithTheme>
      <Router>
        <Provider store={store}>
          <GlobalStyles />
          <App />
        </Provider>
      </Router>
    </WithTheme>
  </React.StrictMode>
);
