import React from 'react';

import Page, { Wrapper } from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Checkbox component";

const Checkbox = () => (
  <Page title={pageTitle}>
    <Wrapper>
      <h1>{pageTitle}</h1>
      <Iframe component='checkbox' />
    </Wrapper>
  </Page>
);

export default Checkbox;
