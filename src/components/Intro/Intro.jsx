import React from "react";

import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Awez</h1>
        <p className={styles.description}>
          Proficient in the MERN stack and well-versed in C++, I am committed to
          merging technology and creativity to build innovative solutions.
        </p>
        <a
          href="https://www.linkedin.com/in/awezmirza/"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("intro/introImage.png")}
        alt="Intro image of me"
        className={styles.introImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
