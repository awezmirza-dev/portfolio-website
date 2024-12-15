import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineer</h3>
              <p>
                Proficient in the MERN stack and well-versed in C++, I am
                committed to merging technology and creativity to build
                innovative solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Academics</h3>
              <p>
                Currently pursuing a Bachelor of Technology in Information
                Technology, gaining a comprehensive understanding of
                cutting-edge technologies and their practical applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Strong knowledge of Data Structures and Algorithms</h3>
              <p>
                Actively engaged in solving Data Structure and Algorithm
                problems which helped me to solve more than 500 DSA problems on
                the LeetCode over the past 1 year.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
