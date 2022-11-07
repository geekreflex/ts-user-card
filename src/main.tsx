import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import WithTheme from './theme/WithTheme';
import { getLayout, getTheme, getUsersFromStorage } from './features/userSlice';

store.dispatch(getUsersFromStorage());
store.dispatch(getLayout());
store.dispatch(getTheme());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <WithTheme>
        <Router>
          <GlobalStyles />
          <App />
        </Router>
      </WithTheme>
    </Provider>
  </React.StrictMode>
);
