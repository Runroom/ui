import axios from 'axios';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import Page from '../components/Page';
import GlobalStyles from '../styles/globals';

import { theme } from '../config';
import { proxy } from '../package.json';

axios.defaults.baseURL = proxy;
axios.defaults.headers.post['Content-Type'] = 'application/json';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page title="Frontdefenders UI">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </Page>
    );
  }
}

export default MyApp;
