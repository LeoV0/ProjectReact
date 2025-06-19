import React from "react";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className="cardContainer">
      <div className={styles.card}>
        <p>CONTENT</p>
      </div>
    </div>
  );
};

export default Card;
