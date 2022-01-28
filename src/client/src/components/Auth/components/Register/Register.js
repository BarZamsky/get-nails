import React from "react";
import styles from "../../Auth.module.scss"
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <img className={styles.image} src={require('../../../../assets/images/neil-main.png')} alt="icon"/>
      <div className={styles.title}>Registration</div>
      <div className={styles.subTitle}>Please choose required account type</div>
      <button className={styles.button}
              onClick={e => history.push('/create-user-account')}
      >
        Signup as user
      </button>
      <button className={styles.button}
              onClick={e => history.push('/create-studio-account')}
      >
        Signup as studio
      </button>
    </div>
  )
}

export default Register;