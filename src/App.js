import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
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
            <Route
              render={({ location }) => (
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <Route path="/summary" component={Summary} />
                    <Route exact path="/" component={Home} />
                  </Switch>
                </AnimatePresence>
              )}
            />
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
