import React from 'react';

import Page from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Button component"

const Button = () => (
  <Page title={pageTitle}>
    <h1>{pageTitle}</h1>
    <Iframe component='button' />
  </Page>
);

export default Button;
