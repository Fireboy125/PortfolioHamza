import React from "react";
import styles from "./FormSection.module.css";
import GlobalButton from "../../components/global Button/GlobalButton";
const FormSection = () => {
  return (
    <section className={styles.formSection}>
      <div className="container">
        <div className={styles.formSection}>
          <h2 className={`${styles.heading}`}>
            Let’s Make Something Great Together
          </h2>
          <p className="globalPara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
            nostrud exercitation.
          </p>
          <form className={styles.form}>
            <input type="text" name="" id="" placeholder="Name" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="number" name="" id="" placeholder="Phone#" />
            {/* <input type="number" name="" id="" /> */}
            <select name="" id="">
              <option value="">Budget</option>
              <option value="">Budget1</option>
              <option value="">Budget2</option>
            </select>
            <textarea name="" id=""></textarea>
          </form>
          <div className={styles.hireMeBtn}>
            <GlobalButton txt="Hire Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
