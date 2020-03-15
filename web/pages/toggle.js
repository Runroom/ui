import React from 'react';
import Head from 'next/head';

import Code from '../components/Code';

const Toggle = () => (
  <>
    <Head>
      <title>Component Toggle</title>
    </Head>

    <h1>Component Toggle</h1>
    <Code component='toggle' />
  </>
);

export default Toggle;
