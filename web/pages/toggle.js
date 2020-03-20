import React from 'react';

import Page, { Wrapper } from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Toggle component";

const Toggle = () => (
  <Page title={pageTitle}>
    <Wrapper>
      <h1>{pageTitle}</h1>
      <Iframe component='toggle' />
    </Wrapper>
  </Page>
);

export default Toggle;
