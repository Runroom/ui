import React from 'react';
import Link from 'next/link';
import { Element } from 'react-scroll'

import Navigation from '../components/Navigation';
import Page from '../components/Page';

const pageTitle = 'UI Components library';

class Home extends React.Component {
  render() {
    return (
      <Page title={pageTitle} variant="sidebar">
        <Navigation />
        <h1>{pageTitle}</h1>
        <Element name="elements" id="elements" className="section">
          <h2>Elements</h2>
          <ul>
            <li>
              <Link href='/button'>
                <a>Button</a>
              </Link>
            </li>
          </ul>
        </Element>
        <Element name="structures" id="structures" className="section">
          <h2>Structures</h2>
          <ul>
            <li>
              <Link href='/list'>
                <a>List</a>
              </Link>
            </li>
          </ul>
        </Element>
        <Element name="form" id="form" className="section">
          <h2>Form</h2>
          <ul>
            <li>
              <Link href='/checkbox'>
                <a>Checkbox</a>
              </Link>
            </li>
            <li>
              <Link href='/radio'>
                <a>Radio</a>
              </Link>
            </li>
          </ul>
        </Element>
      </Page>
    );
  }
};

export default Home;
