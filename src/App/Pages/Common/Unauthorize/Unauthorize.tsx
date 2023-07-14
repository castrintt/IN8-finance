import React from "react";
import styles from "./Unauthorize.module.css";
import { IoIosAlert } from "react-icons/io";

const Unauthorize = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <IoIosAlert />
        <h1>Sem acesso!</h1>
      </div>
    </div>
  );
};

export default Unauthorize;
