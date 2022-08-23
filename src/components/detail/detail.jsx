import React from "react";
import styles from "./detail.module.css";
import { useLocation, Link } from "react-router-dom";

const Detail = (props) => {
  const location = useLocation();
  const { id, title, message, isDone } = location.state.todoDetail;

  return (
    <div className={styles.detail}>
      <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{message}</li>
        <Link to={"/"}>이전으로</Link>
        ㅎㅎㅎ
      </ul>
    </div>
  );
};

export default Detail;
