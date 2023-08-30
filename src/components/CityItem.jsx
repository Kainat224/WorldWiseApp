// import React from "react";
import styles from "./CityItem.module.css";

const CityItem = ({ city }) => {
  const { cityName, emoji, country, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{date}</time>
    </li>
  );
};

export default CityItem;
