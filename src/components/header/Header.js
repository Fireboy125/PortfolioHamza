import React, { useState } from "react";
import styles from "./Header.module.css";
// import logo from "../../images/Portfolio.png";
import GlobalButton from "../global Button/GlobalButton";
const Header = () => {
  const [hamburger, setHamburger] = useState("false");
  const clickHandler = () => {
    if (hamburger === "false") {
      setHamburger("true");
    } else {
      setHamburger("false");
    }
  };
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <img src="/images/Portfolio.png" alt="" />
          </div>
          <div className={styles.navbar}>
            <ul className={styles.navbar_nav}>
              <li className={styles.navItems}>
                <a className={styles.navLink} href="#">
                  About
                </a>
              </li>
              <li className={styles.navItems}>
                <a className={styles.navLink} href="#">
                  Portfolio
                </a>
              </li>
              <li className={styles.navItems}>
                <a className={styles.navLink} href="#">
                  Contact
                </a>
              </li>
              <span className={styles.navButton}>
                <GlobalButton txt="Get Started" />
              </span>
              <li>
                <label className={styles.humbergButton} onClick={clickHandler}>
                  {/* <input type={`${hamburger}`} id="check" /> */}
                  <span className={styles.topbar}></span>
                  <span className={styles.midbar}></span>
                  <span className={styles.bottombar}></span>
                </label>
              </li>
            </ul>
            {hamburger === "true" ? (
              <div className={styles.wrapper}>
                <div className={styles.wrapperItems}>
                  <p>About</p>
                  <p>Portfolio</p>
                  <p>Contact</p>
                  <p style={{ marginLeft: "30px" }}>
                    <GlobalButton txt="Get Started" />
                  </p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
