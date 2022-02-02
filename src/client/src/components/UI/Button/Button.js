import React from "react";
import styles from "./Button.module.scss";
import { string, func } from "prop-types";

const Button = ({ onClick, buttonText }) => (
  <button className={styles.button}
          onClick={onClick}
  >
    {buttonText}
  </button>
)

Button.propTypes = {
  onClick: func.isRequired,
  buttonText: string.isRequired
}

export default Button;