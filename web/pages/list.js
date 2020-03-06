import React from 'react';

import Page from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "List component";

const List = () => (
  <Page title={pageTitle}>
    <h1>{pageTitle}</h1>
    <Iframe component='list' />
  </Page>
);

export default List;