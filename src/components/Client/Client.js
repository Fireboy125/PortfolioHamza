import React, { useState } from "react";
import styles from "./Client.module.css";
import Tab from "../TabComponent/Tab";
const Client = () => {
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
  const handleImg5Txt = () => {
    setActiveTab("img5");
  };
  const handleImg6Txt = () => {
    setActiveTab("img6");
  };
  return (
    <section className={styles.client}>
      <div className="container">
        <div>
          <h2 className={`globalHeading ${styles.ab}`}> What My Client Says</h2>
          <p className={`globalPara`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
            nostrud exercitation.
          </p>
        </div>
        <div className={styles.clientWrapper}>
          <div className={styles.leftContent}>
            <div className={styles.backImgMap}>
              <img
                className={`${activeTab === "img1" ? "active" : ""}`}
                onClick={handleImg1Txt}
                src="/images/1.png"
                alt=""
              />
              <img
                className={`activeTab === "img2" ? "active" : ""`}
                src="/images/3.png"
                onClick={handleImg2Txt}
                alt=""
              />
              <img
                className={`activeTab === "img3" ? "active" : ""`}
                onClick={handleImg3Txt}
                src="/images/22.png"
                alt=""
              />
              <img
                className={`activeTab === "img2" ? "active" : ""`}
                onClick={handleImg4Txt}
                src="/images/3.png"
                alt=""
              />
              <img
                className={`activeTab === "img2" ? "active" : ""`}
                onClick={handleImg5Txt}
                src="/images/22.png"
                alt=""
              />
              <img
                className={`activeTab === "img2" ? "active" : ""`}
                onClick={handleImg6Txt}
                src="/images/1.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.rightContent}>
            {(() => {
              switch (activeTab) {
                case "img1":
                  return (
                    <Tab
                      txt="Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
                      h3="- Smith"
                      h5="CEO ABC Company"
                    />
                  );
                case "img2":
                  return (
                    <Tab
                      txt="accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt is the most
                        explicabo."
                      h3="- Mr Smith"
                      h5="CEO ABC XYZ Company"
                    />
                  );
                case "img3":
                  return (
                    <Tab
                      txt="Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem  doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab  vitae dicta sunt is the most
                        explicabo."
                      h3="- Smith"
                      h5="CEO ABC "
                    />
                  );
                case "img4":
                  return (
                    <Tab
                      txt="Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto "
                      h3="- Smith"
                      h5="Company"
                    />
                  );
                case "img5":
                  return (
                    <Tab
                      txt="Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam"
                      h3="- Leopard Smith"
                      h5="CEO Company"
                    />
                  );
                case "img6":
                  return (
                    <Tab
                      txt="eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt is the most
                        explicabo."
                      h3="-King Smith"
                      h5="ABC Company"
                    />
                  );
                default:
                  return (
                    <Tab
                      txt="Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt is the most
                        explicabo."
                      h3="- Sara Smith"
                      h5="CEO ABC Company"
                    />
                  );
              }
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
