import React from 'react';
import Link from 'next/link';

import Aside from './Aside';
import NavList from './NavList';
import { Title2 } from '../../ui/Titles';

const Nav = () => (
  <Aside>
    <Title2 as='div'>Frontdefenders UI</Title2>
    <NavList>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/sample'>
          <a>Component Sample</a>
        </Link>
      </li>
      <li>
        <Link href='/foo'>
          <a>Component Foo</a>
        </Link>
      </li>
    </NavList>
  </Aside>
);

export default Nav;
