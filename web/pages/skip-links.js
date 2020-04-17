import React from 'react';

import Page, { Wrapper } from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Skip-links component";

const Skiplinks = () => (
  <Page title={pageTitle}>
    <Wrapper>
      <h1>{pageTitle}</h1>
      <Iframe component='skip-links' />
    </Wrapper>
  </Page>
);

export default Skiplinks;
