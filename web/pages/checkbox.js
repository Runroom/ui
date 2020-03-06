import React from 'react';

import Page from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Checkbox component";

const Checkbox = () => (
  <Page title={pageTitle}>
    <h1>{pageTitle}</h1>
    <Iframe component='checkbox' />
  </Page>
);

export default Checkbox;