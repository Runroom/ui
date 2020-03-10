import React from 'react';
import Head from 'next/head';

import Code from '../components/Code';

const breadcrumbs = () => (
  <>
    <Head>
      <title>Component Breadcrumbs</title>
    </Head>

    <h1>Breadcrumbs component</h1>
    <Code component='breadcrumbs' />
  </>
);

export default breadcrumbs;