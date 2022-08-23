import React from "react";
import styles from "./button.module.css";

const Button = ({ name, onClick }) => {
  return (
    <button className={`${styles.button} ${getStyles(name)}`} onClick={onClick}>
      {name}
    </button>
  );
};

function getStyles(name) {
  switch (name) {
    case "DELETE":
      return styles.delete;
    case "ADD":
      return styles.add;
    default:
      return null;
  }
}

export default Button;
