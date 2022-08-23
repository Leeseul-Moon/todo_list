import React from "react";
import styles from "./detail.module.css";
import { useLocation, Link } from "react-router-dom";

const Detail = (props) => {
  const location = useLocation();
  const { id, title, message, isDone } = location.state.todoDetail;

  return (
    <div className={styles.container}>
      <ul className={styles.detail}>
        <div className={styles.idLink}>
          <li className={styles.id}>id : {id}</li>
          <Link className={styles.link} to={"/"}>
            이전으로
          </Link>
        </div>
        <li className={styles.title}>{title}</li>
        <li className={styles.message}>{message}</li>
      </ul>
    </div>
  );
};

export default Detail;
