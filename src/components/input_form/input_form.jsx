import React from "react";
import Button from "../button/button";
import styles from "./input_form.module.css";

const InputForm = (props) => {
  return (
    <div className={styles.inputForm}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter your to-do"
      />
      <Button name="ADD" />
    </div>
  );
};

export default InputForm;
