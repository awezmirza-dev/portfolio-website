import React from "react";

import styles from "./DSA.module.css";
import { getImageUrl } from "../../utils";

export const DSA = () => {
  return (
    <section className={styles.container} id="dsa">
      <h2 className={styles.title}>Data Structures and Algorithms</h2>
      <div className={styles.content}>
        <img
          className={styles.heatmap}
          src={getImageUrl("dsa/lc-heatmap.png")}
          alt="LeetCode Heatmap"
        />
        <div className={styles.otherContent}>
          <a
            className={styles.leetcodeLink}
            href="https://leetcode.com/u/awezmirza/"
          >
            <img
              className={styles.leetcodeLogo}
              src={getImageUrl("dsa/leetcode.png")}
              alt="Leetcode Logo"
            />
            <div className={styles.leetcodeURLText}>leetcode.com/awezmirza</div>
          </a>
          <div className={styles.leetcodeDetailsList}>
            <div className={styles.leetcodeDetailsListItem}>
              • Actively engaged in solving Data Structures and Algorithms (DSA)
              problems, maintaining a streak of over 350 days on LeetCode.
            </div>
            <div className={styles.leetcodeDetailsListItem}>
              • Solved more than 500 DSA problems on the LeetCode over the past
              1 year.
            </div>
            <div className={styles.leetcodeDetailsListItem}>
              • Enthusiastically participated in numerous LeetCode contests,
              consistently achieving a valuable experience in each contest.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
