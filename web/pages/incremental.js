import React from 'react';
import Head from 'next/head';

import Code from '../components/Code';

const Incremental = () => (
  <>
    <Head>
      <title>Component Incremental</title>
    </Head>

    <h1>Component Incremental</h1>
    <Code component='incremental' />
  </>
);

export default Incremental;
