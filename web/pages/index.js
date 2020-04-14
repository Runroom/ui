import React from 'react';
import { Element } from 'react-scroll'

import Card from '../components/Card';
import Navigation from '../components/Navigation';
import Page, { CardsList, Wrapper } from '../components/Page';

import { structure } from '../config';
import { capitalize } from '../utils/helpers';

const pageTitle = 'UI Components library';

class Home extends React.Component {
  render() {
    return (
      <Page title={pageTitle} variant="sidebar">
        <Navigation />
        <Wrapper>
          <h1 className="title1">{pageTitle}</h1>
          {structure.map(section => (
            <Element
              key={`section-${section.name}`}
              name={section.name}
              id={section.name}
              className="section"
            >
              <h2 className="title2">{capitalize(section.name)}</h2>
              <CardsList>
                {section.components.map(component => (
                  <li key={`component-${component.name}`}>
                    <Card
                      slug={component.slug}
                      name={component.name}
                      img={component.img}
                    />
                  </li>
                ))}
              </CardsList>
            </Element>
          ))}
        </Wrapper>
      </Page>
    );
  }
};

export default Home;
