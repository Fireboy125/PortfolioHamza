import React from "react";
import styles from "./PortfolioSectCards.module.css";
const PortfolioSectCards = (props) => {
  return (
    <div className={styles.portfolioCard}>
      <img className={styles.image} src={props.img} alt="" />
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h4>{props.txt}</h4>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSectCards;
