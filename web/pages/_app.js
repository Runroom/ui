import axios from 'axios';
import App from 'next/app';
import Head from 'next/head';

import { proxy } from '../package.json';
import Content from '../core/ui/Content';
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
        <Content>
          <Nav />
          <main>
            <Component {...pageProps} />
          </main>
        </Content>
      </>
    );
  }
}

export default MyApp;
