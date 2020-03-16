import React from 'react';
import Head from 'next/head';

import Code from '../components/Code';

const Textarea = () => (
  <>
    <Head>
      <title>Component Textarea</title>
    </Head>

    <h1>Textarea component</h1>
    <Code component='textarea' />
  </>
);

export default Textarea;
