import React, { useState } from "react";
import styles from "./PortfolioSect.module.css";
import PortfolioSectCards from "../PortfolioSectCards/PortfolioSectCards";
const PortfolioSect = () => {
  const [activeTab, setActiveTab] = useState("img1");
  const handleImg1Txt = () => {
    setActiveTab("img1");
    console.log(activeTab);
  };
  const handleImg2Txt = () => {
    setActiveTab("img2");
    console.log(activeTab);
  };
  const handleImg3Txt = () => {
    setActiveTab("img3");
  };
  const handleImg4Txt = () => {
    setActiveTab("img4");
  };
  return (
    <section className={styles.portfolioSect}>
      <div className="container">
        <div className={styles.portfolioSectWrap}>
          <h2>Portfolio</h2>
          <ul className={styles.tabs}>
            <li
              className={`${activeTab === "img1" ? "active" : ""}`}
              onClick={handleImg1Txt}
            >
              All
            </li>
            <li
              className={`${activeTab === "img2" ? "active" : ""}`}
              onClick={handleImg2Txt}
            >
              Logo
            </li>
            <li
              className={`${activeTab === "img3" ? "active" : ""}`}
              onClick={handleImg3Txt}
            >
              Website
            </li>
            <li
              className={`${activeTab === "img4" ? "active" : ""}`}
              onClick={handleImg4Txt}
            >
              Mobile Apps
            </li>
          </ul>
        </div>
        <div className={styles.portfolioSectCardWrapper}>
          {(() => {
            switch (activeTab) {
              case "img1":
                return (
                  <>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/abad.png"}
                        txt="Hello World"
                      />
                    </div>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/shot.png"}
                        txt="Sed ut Perspiciatis"
                      />
                    </div>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/apri.png"}
                        txt="Sed ut Perspiciatis"
                      />
                    </div>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/bane.png"}
                        txt="Hello World"
                      />
                    </div>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/nalie.png"}
                        txt="kadsjkkdjsakj"
                      />
                    </div>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/v1.png"}
                        txt="Sed ut Perspiciatis"
                      />
                    </div>
                  </>
                );
              case "img2":
                return (
                  <>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/nalie.png"}
                        txt="Hello World"
                      />
                    </div>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/v1.png"}
                        txt="Hello World"
                      />
                    </div>
                  </>
                );
              case "img3":
                return (
                  <>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/abad.png"}
                        txt="Hello World"
                      />
                    </div>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/apri.png"}
                        txt="Hello World"
                      />
                    </div>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/bane.png"}
                        txt="Hello World"
                      />
                    </div>
                  </>
                );
              case "img4":
                return (
                  <>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/bane.png"}
                        txt="Hello World"
                      />
                    </div>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/shot.png"}
                        txt="Hello World"
                      />
                    </div>
                    <div className={styles.PortfolioSectCard}>
                      <PortfolioSectCards
                        img={"/images/abad.png"}
                        txt="Hello World"
                      />
                    </div>
                  </>
                );
              default:
                return (
                  <div className={styles.PortfolioSectCard}>
                    <PortfolioSectCards
                      img={
                        <div className={styles.PortfolioSectCard}>
                          <PortfolioSectCards
                            img={"/images/apri.png"}
                            txt="Hello World"
                          />
                        </div>
                      }
                      txt="Hello World"
                    />
                  </div>
                );
            }
          })()}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSect;
