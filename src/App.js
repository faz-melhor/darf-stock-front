import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyle';
import styles from './styles';
import Summary from './components/Summary';
import Home from './components/Home';
import { DataProvider } from './context';

function App() {
  return (
    <DataProvider>
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
    </DataProvider>
  );
}

export default App;
