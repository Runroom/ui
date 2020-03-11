import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Element } from 'react-scroll'

const Home = () => (
  <>
    <Head>
      <title>UI Components library</title>
    </Head>
    <h1>UI Components library</h1>
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
  </>
);

export default Home;
