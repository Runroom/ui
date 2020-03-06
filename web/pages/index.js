import React from 'react';
import Link from 'next/link';
import { Element } from 'react-scroll'

import Navigation from '../components/Navigation';
import Page from '../components/Page';

import { structure } from '../config';
import { capitalize } from '../utils/helpers';

const pageTitle = 'UI Components library';

class Home extends React.Component {
  render() {
    return (
      <Page title={pageTitle} variant="sidebar">
        <Navigation />
        <h1>{pageTitle}</h1>
        {structure.map(section => (
          <Element name={section.name} id={section.name} className="section">
            <h2>{capitalize(section.name)}</h2>
            <ul>
              {section.components.map(component => (
                <li>
                  <Link href={component.slug}>
                    <a>{component.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Element>
        ))}
      </Page>
    );
  }
};

export default Home;
