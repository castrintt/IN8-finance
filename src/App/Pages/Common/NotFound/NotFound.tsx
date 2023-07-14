import React from "react";
import styles from "./NotFound.module.css";
import { MdDangerous } from "react-icons/md";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MdDangerous />
      </div>
    </div>
  );
};

export default NotFound;
