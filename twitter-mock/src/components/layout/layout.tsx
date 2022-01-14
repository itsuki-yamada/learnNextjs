import styles from './layout.module.css'
import Head from "next/head";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header className={styles.header}>
        <TwitterIcon/>
        <HomeIcon/>
        <SearchIcon/>
        <PersonIcon/>
        <MapsUgcIcon/>
      </header>
      {children}
    </div>
  )
}