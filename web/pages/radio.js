import React from 'react';
import Head from 'next/head';

import Code from '../Iframe';

const Radio = () => (
  <>
    <Head>
      <title>Component Radio</title>
    </Head>
    <h1>Radio component</h1>
    <Iframe component='radio' />
  </>
);

export default Radio;
