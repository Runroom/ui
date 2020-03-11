import React from 'react';
import { Link } from 'react-scroll'

import { Aside, NavList } from './styles';
import { Title2 } from '../../styles/Titles';

const sections = [
  {
    id: 'elements',
    label: 'Elements'
  }, {
    id: 'structures',
    label: 'Structures'
  }, {
    id: 'form',
    label: 'Form'
  }
];

class Nav extends React.Component {
  render() {

    return (
      <Aside>
        <Title2 as='div'>Sections</Title2>
        <NavList>
          {sections.map(section => (
            <li key={`${section.id}-key`}>
              <Link
                to={section.id}
                spy={true}
                smooth={true}
                duration={350}
                offset={-50}
                activeClass='active'
              >
                {section.label}
              </Link>
            </li>
          ))}
        </NavList>
      </Aside>
    );
  }
}

export default Nav;
