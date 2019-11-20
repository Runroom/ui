import axios from 'axios';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { proxy } from '../package.json';
import { theme } from '../config';
import Content from '../core/ui/Content';
import Main from '../core/ui/Main';
import GlobalStyles from '../core/ui/Globals';
import Nav from '../core/components/Nav';

axios.defaults.baseURL = proxy;
axios.defaults.headers.post['Content-Type'] = 'application/json';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Frontdefenders UI</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Content>
            <GlobalStyles />
            <Nav />
            <Main>
              <Component {...pageProps} />
            </Main>
          </Content>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
