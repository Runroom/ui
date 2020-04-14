import React from 'react';
import { Link } from 'react-scroll'

import { structure } from '../../config';
import { capitalize } from '../../utils/helpers';
import { Aside, NavList } from './styles';

class Navigation extends React.Component {
  render() {

    return (
      <Aside>
        <div className="title2">Sections</div>
        <NavList>
          {structure.map(section => (
            <li key={`${section.name}-key`}>
              <Link
                to={section.name}
                spy={true}
                smooth={true}
                duration={350}
                offset={-50}
                activeClass='active'
              >
                {capitalize(section.name)}
              </Link>
            </li>
          ))}
        </NavList>
      </Aside>
    );
  }
}

export default Navigation;
