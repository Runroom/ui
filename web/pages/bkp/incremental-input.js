import React from 'react';

import Page from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Component Incremental"

const Incremental = () => (
  <Page title={pageTitle}>
    <h1>{pageTitle}</h1>
    <Iframe component='incremental' />
  </Page>
);

export default Incremental;
