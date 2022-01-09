import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Example() {
  return (
    <div className={styles.container}>
      <h1> Hello! Here is Example Page! </h1>
      <section>
        <h2>Examples</h2>
        <ul className={styles.li}>
          <li>
            <Link href={'/examples/todoList'}>
              <a className={styles.link}>TodoList</a>
            </Link>
          </li>
        </ul>
      </section>
      <footer>
        <h3>
          {/* TODO: exampleディレクトリ配下のファイル名を取得し、LISTとして並べるAPIを作成する*/}
          <Link href={'/'}>
            <a className={styles.link}>Back Home</a>
          </Link>
        </h3>
      </footer>
    </div>
  );
}