import React from 'react';
import Head from 'next/head';

import PageWrapper, { CardsList, Wrapper } from './styles';

class Page extends React.Component {
  render() {
    const { children, title, variant = 'default' } = this.props;

    return (
      <PageWrapper className={variant}>
        <Head>
          <title>{title}</title>
        </Head>
        <main>
          {children}
        </main>
      </PageWrapper>
    );
  }
};

export default Page;
export { CardsList, Wrapper };
