import styles from "./header.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import React from "react";

/**
 * Header
 *
 * TODO: それぞれのアイコンに機能を実装する
 * @constructor
 */
export const Header: React.VFC = () => {
  return (
    <header className={styles.header}>
      <TwitterIcon/>
      <HomeIcon/>
      <SearchIcon/>
      <PersonIcon/>
      <MapsUgcIcon color={'primary'}/>
    </header>
  )
}