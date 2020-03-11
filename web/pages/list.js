import React from 'react';
import Head from 'next/head';

import Code from '../Iframe';

const List = () => (
  <>
    <Head>
      <title>Component List</title>
    </Head>
    <h1>List component</h1>
    <Iframe component='list' />
  </>
);

export default List;
