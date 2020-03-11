import React from 'react';
import Link from 'next/link';

import { Aside, NavList } from './styles';
import { Title2 } from '../../styles/Titles';

const Nav = () => (
  <Aside>
    <Title2 as='div'>Sections</Title2>
    <NavList>
      <li>
        <Link href="#elements">
          <a>Elements</a>
        </Link>
      </li>
      <li>
        <Link href="#structures">
          <a>Structures</a>
        </Link>
      </li>
      <li>
        <Link href="#form">
          <a>Form</a>
        </Link>
      </li>
    </NavList>
  </Aside>
);

export default Nav;
