import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => (
  <>
    <Head>
      <title>UI Components library</title>
    </Head>
    <h1>UI Components library</h1>
    <div id="elements" className="section">
      <h2>Elements</h2>
      <ul>
        <li>
          <Link href='/button'>
            <a>Button</a>
          </Link>
        </li>
      </ul>
    </div>
    <div id="structures" className="section">
      <h2>Structures</h2>
      <ul>
        <li>
          <Link href='/list'>
            <a>List</a>
          </Link>
        </li>
      </ul>
    </div>
    <div id="form" className="section">
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
    </div>
  </>
);

export default Home;
