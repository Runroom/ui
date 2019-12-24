import React from 'react';
import Head from 'next/head';

import Code from '../components/Code';

const Cta = () => (
  <>
    <Head>
      <title>Component Cta</title>
    </Head>

    <h1>Cta component</h1>
    <Code component='cta' />
  </>
);

export default Cta;
