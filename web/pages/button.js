import React from 'react';
import Head from 'next/head';

import Code from '../Iframe';

const Button = () => (
  <>
    <Head>
      <title>Component Button</title>
    </Head>
    <h1>Button component</h1>
    <Iframe component='button' />
  </>
);

export default Button;
