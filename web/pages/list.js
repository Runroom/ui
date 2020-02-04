import React from 'react';
import Head from 'next/head';

import Code from '../components/Code';

const List = () => (
  <>
    <Head>
      <title>Component List</title>
    </Head>

    <h1>List component</h1>
    <Code component='list' />
  </>
);

export default List;
