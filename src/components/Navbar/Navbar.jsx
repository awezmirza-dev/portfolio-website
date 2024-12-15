import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/" target="_self">
        Mirza Awez Baig
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" target="_self">
              About
            </a>
          </li>
          <li>
            <a href="#projects" target="_self">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" target="_self">
              Skills
            </a>
          </li>
          <li>
            <a href="#dsa" target="_self">
              DSA
            </a>
          </li>
          <li>
            <a href="#contact" target="_self">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
