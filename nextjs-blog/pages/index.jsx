import Head from 'next/head';
import React from 'react';
import Link from 'next/link'

const Home = () => (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <h1>
        Read {' '}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
    </>
);

export default Home;
