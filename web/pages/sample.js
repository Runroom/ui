import React from 'react';
import Head from 'next/head';

import Code from '../components/Code';

const Home = () => (
  <>
    <Head>
      <title>Component Sample</title>
    </Head>

    <h1>Sample component</h1>
    <Code component='sample' />
  </>
);

export default Home;
