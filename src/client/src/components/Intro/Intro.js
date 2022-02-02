import React from "react";
import styles from './Intro.module.scss'
import { useHistory } from "react-router-dom";
import Button from "../UI/Button";

const Intro = () => {
  const history = useHistory();

  const onGetStartedClickHandler = () => {
    history.push('/create-account')
  }

  const onLoginClickedHandler = () => {
    history.push('/login')
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Get-Nails</div>
      <img className={styles.image} src={require('../../assets/images/neil-main.png')} alt="img"/>
      <div className={styles.subTitle}>Book Your Favourite Nail Artist</div>
      <Button onClick={onGetStartedClickHandler} buttonText="Get Started" />
      <div className={styles.registeredUser}>
        Already have an account? <div className={styles.login} onClick={onLoginClickedHandler}>Login</div>
      </div>
    </div>
  )
}

export default Intro;