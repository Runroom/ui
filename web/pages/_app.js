import axios from 'axios';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import { proxy } from '../package.json';
import { theme } from '../config';
import Content from '../styles/Content';
import GlobalStyles from '../styles/Globals';
import Page from '../components/Page';

axios.defaults.baseURL = proxy;
axios.defaults.headers.post['Content-Type'] = 'application/json';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page title="Frontdefenders UI">
        <ThemeProvider theme={theme}>
          <Content>
            <GlobalStyles />
            <main>
              <Component {...pageProps} />
            </main>
          </Content>
        </ThemeProvider>
      </Page>
    );
  }
}

export default MyApp;
