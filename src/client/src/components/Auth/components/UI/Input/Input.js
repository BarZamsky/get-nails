import React from "react";
import { string, func, element } from "prop-types";
import styles from "../../Register/components/RegisterForm.module.scss";

const Input = ({ icon, type, value, placeholder, onChange}) => (
  <div className={styles.inputField}>
    <span>{icon}</span>
    <input type={type}
           placeholder={placeholder}
           value={value}
           onChange={onChange}
    />
  </div>
)

Input.propTypes = {
  type: string.isRequired,
  value: string.isRequired,
  placeholder: string.isRequired,
  onChange: func.isRequired,
  icon: element.isRequired
}

export default Input;