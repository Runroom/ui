import React from 'react';

import Page, { Wrapper } from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Picture component";

const Radio = () => (
  <Page title={pageTitle}>
    <Wrapper>
      <h1>{pageTitle}</h1>
      <Iframe component='picture' />
    </Wrapper>
  </Page>
);

export default Radio;
