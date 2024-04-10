import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <p>
        <span>Yiyi</span>
        <span>Plantinet</span>
      </p>

      <div className={styles.right}>
        <span>Github</span>
        <span>Linkedin</span>
        <span>Contact-moi</span>
      </div>
    </div>
  );
}
