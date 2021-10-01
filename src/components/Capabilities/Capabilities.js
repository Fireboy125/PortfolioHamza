import React from "react";
import styles from "./Capabilities.module.css";
import CapabilitiesCard from "../../components/CapabilitiesCard/CapabilitiesCard";
const Capabilities = () => {
  return (
    <section className={styles.capabilities}>
      <div className="container">
        <div className={styles.capabilitiesWrapper}>
          <div>
            <h2 className={`globalHeading`}> My Capabilities</h2>
            <p className={`globalPara`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et t enim ad minim veniam,
              quis nostrud exercitation.
            </p>
          </div>
          {/* <div className={styles.CapabilitiesCards}></div> */}
          <div className={styles.CapabilitiesCards}>
            <div className={styles.CapabilitiesCardsWrap}>
              <CapabilitiesCard />
            </div>
            <div className={styles.CapabilitiesCardsWrap}>
              <CapabilitiesCard />
            </div>
            <div className={styles.CapabilitiesCardsWrap}>
              <CapabilitiesCard />
            </div>
            <div className={styles.CapabilitiesCardsWrap}>
              <CapabilitiesCard />
            </div>
            <div className={styles.CapabilitiesCardsWrap}>
              <CapabilitiesCard />
            </div>
            <div className={styles.CapabilitiesCardsWrap}>
              <CapabilitiesCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
