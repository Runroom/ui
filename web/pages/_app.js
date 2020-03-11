import axios from 'axios';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { proxy } from '../package.json';
import { theme } from '../config';
import Content from '../styles/Content';
import GlobalStyles from '../styles/Globals';
import Nav from '../components/Nav';

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
            <main>
              <Component {...pageProps} />
            </main>
          </Content>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
