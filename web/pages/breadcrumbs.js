import React from 'react';

import Page from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Breadcrumbs component"

const Breadcrumbs = () => (
  <Page title={pageTitle}>
    <h1>{pageTitle}</h1>
    <Iframe component='breadcrumbs' />
  </Page>
);

export default Breadcrumbs;
