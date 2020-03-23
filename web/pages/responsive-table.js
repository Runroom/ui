import React from 'react';

import Page, { Wrapper } from '../components/Page';
import Iframe from '../components/Iframe';

const pageTitle = "Responsive Table component";

const ResponsiveTable = () => (
  <Page title={pageTitle}>
    <Wrapper>
      <h1>{pageTitle}</h1>
      <Iframe component='responsiveTable' />
    </Wrapper>
  </Page>
);

export default ResponsiveTable;
