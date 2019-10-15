import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyle';
import styles from './styles';
import Summary from './components/Summary';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={styles}>
        <GlobalStyle />
        <Layout centered>
          <Switch>
            <Route path="/summary">
              <Summary />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
