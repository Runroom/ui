import React from 'react';
import { useRouter } from 'next/router';

import Page from '../components/Page';
import Iframe from '../components/Iframe';

const Component = () => {
  const router = useRouter();
  const { slug } = router.query;
  const pageTitle = `${slug} component`;

  return (
    <Page title={pageTitle}>
      <h1>{pageTitle}</h1>
      <Iframe component={slug} />
    </Page>
  );
};

export default Component;
