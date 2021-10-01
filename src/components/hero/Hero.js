import React from "react";
import styles from "./Hero.module.css";
import GlobalButton from "../../components/global Button/GlobalButton";
const hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroImg}>
          <img src="/images/Layer 2 copy.png" alt="" />
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.heroLeftContent}>
            <p className={styles.heroLeftContentFirst}>Hello,I am</p>
            <h2 className={styles.heroLeftContentHeading}>Mark Reccardo</h2>
            <p className={styles.heroLeftContentSecond}>
              A young <span>UI/UX</span> designer with crazy for mobile & web
              design.
            </p>
            <div className={styles.findMe}>
              <p className={styles.findMeContent}>Find Me on</p>
              <span>
                <a href="/">
                  <img src="/images/behance.png" alt="" />
                </a>
              </span>
              <span>
                <a href="https://dribbble.com/">
                  <img src="/images/dribbble.png" alt="" />
                </a>
              </span>
              <span>
                <a href="/">
                  <img src="/images/insta.png" alt="" />
                </a>
              </span>
              <span>
                <a href="/">
                  <img src="/images/linked in.png" alt="" />
                </a>
              </span>
              <span>
                <a href="/">
                  <img src="/images/pinterest.png" alt="" />
                </a>
              </span>
            </div>
            <div>
              <GlobalButton txt="Hire Me" />
              <GlobalButton txt="Portfolio" />
            </div>
          </div>
          <div className={styles.heroRightContent}>
            <img src="/images/Layer 4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
