import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Link href="dashboard">Dashboard</Link>
        <Link href="about">About</Link>
        <Link href="categories">Categories</Link>
        <Link href="blog">Blogs</Link>
      </div>
      <div className={styles.items}>
        <Link href="/">
          <span className={styles.mainTitle}>Blog</span>
          <span className={styles.title}>spots</span>
        </Link>
      </div>
      <div className={styles.items}>
        <Link href="#">Search</Link>
        <Link href="#">Edit</Link>
        <Link href="contact">Contact</Link>
        <Link href="#">En</Link>
      </div>
    </div>
  );
};

export default Navbar;
