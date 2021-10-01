import React from "react";
import styles from "./AboutMe.module.css";
import GlobalButton from "../../components/global Button/GlobalButton";
const AboutMe = () => {
  return (
    <section className={styles.AboutMe}>
      <div className={`container`}>
        <div className={styles.AboutMeWrapper}>
          <div className={styles.AboutMeLeftContent}>
            <h2 className={styles.AboutMeLeftContentHeading}>About Me</h2>
            <p className={styles.AboutMeLeftContentPara}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p className={styles.AboutMeLeftContentPara}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <GlobalButton txt="Download CV" />
            {/* <p>jhahjds</p> */}
          </div>
          <div className={styles.AboutMeRightContent}>
            <img src="/images/Layer 0.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
