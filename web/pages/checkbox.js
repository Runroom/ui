import React from 'react';
import Head from 'next/head';

import Code from '../Iframe';

const Checkbox = () => (
  <>
    <Head>
      <title>Component Checkbox</title>
    </Head>
    <h1>Checkbox component</h1>
    <Iframe component='checkbox' />
  </>
);

export default Checkbox;
