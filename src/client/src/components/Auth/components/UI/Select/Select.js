import React from "react";
import styles from "../../Register/components/RegisterForm.module.scss";
import { func } from "prop-types";
import { cities } from "../../Register/utils";

const Select = ({ onChange }) => (
  <select className={styles.selectContainer}
          onChange={onChange}
  >
    <option>Select city</option>
    {cities.map(city => (
      <option key={city}>{city}</option>
    ))}
  </select>
)

Select.propTypes = {
  onChange: func.isRequired
}

export default Select;