import React from 'react';
import Head from 'next/head';

import Code from '../components/Code';

const Link = () => (
  <>
    <Head>
      <title>Component Link</title>
    </Head>

    <h1>Link component</h1>
    <Code component='link' />
  </>
);

export default Link;
