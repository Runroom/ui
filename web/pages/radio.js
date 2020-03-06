import React from 'react';

import Page from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Radio component";

const Radio = () => (
  <Page title={pageTitle}>
    <h1>{pageTitle}</h1>
    <Iframe component='radio' />
  </Page>
);

export default Radio;