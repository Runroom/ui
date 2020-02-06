import React from 'react';
import Head from 'next/head';

import Code from '../components/Code';

const Button = () => (
  <>
    <Head>
      <title>Component Button</title>
    </Head>

    <h1>Button component</h1>
    <Code component='button' />
  </>
);

export default Button;
