import Head from 'next/head';
import React from 'react';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Welcome My Page!</p>
          <p>I'm Itsuki. I'm a software enginer.</p>
          <p>
            (This is a sample website - you'll be building a site like this
            on {' '}
            <a href="https://nextjs.org/learn"> our Next.js tutorial</a>
          </p>
        </section>
      </Layout>
  );
};
