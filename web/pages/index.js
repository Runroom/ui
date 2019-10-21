import React from 'react';
import Head from 'next/head';

import Code from '../components/code';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <h1>Sample component</h1>
    <Code component="sample" />
  </>
);

export default Home;
