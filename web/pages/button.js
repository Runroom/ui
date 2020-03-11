import React from 'react';

import Page, { Wrapper } from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Button component"

const Button = () => (
  <Page title={pageTitle}>
    <Wrapper>
      <h1>{pageTitle}</h1>
      <Iframe component='button' />
    </Wrapper>
  </Page>
);

export default Button;
