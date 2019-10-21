import axios from 'axios';
import App from 'next/app';
import Head from 'next/head';

import { proxy } from '../package.json';

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
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
