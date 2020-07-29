import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

// import SignUp from './pages/SignUp';
import AppProvider from './hooks';

import Routes from './routes';
// import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);
export default App;
