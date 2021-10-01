import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.footer_txt}>
          <div className={styles.footer_line}></div>
          <div className={styles.footerLogo}>
            <img src="/images/Portfolio.png" alt="" />
          </div>
          <nav>
            <ul className={styles.nav_links}>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Portfolio</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
          <small>NY / +1 123456 7890 / hello@graphics.studio.com</small>
          <div className={styles.icons}>
            <a href="/">
              <img src="/images/behance.png" alt="" />
            </a>
            <a href="/">
              <img src="/images/dribbble.png" alt="" />
            </a>
            <a href="/">
              <img src="/images/insta.png" alt="" />
            </a>
            <a href="/">
              <img src="/images/linked in.png" alt="" />
            </a>
            <a href="/">
              <img src="/images/pinterest.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>Copyright © 2019 Graphics Studio | All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
