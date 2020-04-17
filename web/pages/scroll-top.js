import React from 'react';

import Page, { Wrapper } from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Scroll Top component";

const ScrollTop = () => (
  <Page title={pageTitle}>
    <Wrapper>
      <h1>{pageTitle}</h1>
      <Iframe component='scrollTop' />
    </Wrapper>
  </Page>
);

export default ScrollTop;
