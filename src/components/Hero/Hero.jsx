import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ansh</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 year of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttonGroup}>
        <a href="mailto:anshm8599@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="/Updated_Resume__Copy_.pdf" target="_blank" className={styles.resume} download>
          Download CV
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/my-modified-Picsart.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
