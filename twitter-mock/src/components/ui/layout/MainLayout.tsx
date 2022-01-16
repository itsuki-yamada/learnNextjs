import styles from './layout.module.css'
import Head from "next/head";
import React from "react";
import { Header } from "../header/Header";

type Props = {
  children: React.ReactNode,
  pageName: string,
}

export function MainLayout({ children, pageName }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header/>
      <main>
        <h1>{pageName}</h1>
        {children}
      </main>
    </div>
  )
}