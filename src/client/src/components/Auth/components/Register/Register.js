import React, { useState } from "react";
import styles from "./Register.module.scss"
import {
  MailOutline,
  LockOutlined,
  PersonOutline,
  PhoneOutlined
} from '@material-ui/icons';
import server from '../../../../server';
import axios from "axios";

const cities = [
  'Tel Aviv',
  'Petah Tiqva',
  'Ramat Gan',
  'Jerusalem',
  'Kiryat Ono',
  'Bat Yam',
]

const Register = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');

  const onClickHandler = () => {
    const body = {
      first_name: firstName,
      last_name: lastName,
      phone,
      email,
      password,
      city
    }

    axios.post(`http://localhost:5000/auth/register`, body)
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e && e.message))
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={require('../../../../assets/images/neil-main.png')} alt="icon"/>
      <div className={styles.title}>Let's create an account</div>
      <div className={styles.inputs}>
        <div className={styles.inputField}>
          <span><MailOutline/></span>
          <input type="email"
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputField}>
          <span><LockOutlined/></span>
          <input type="password"
                 placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.inputsRow}>
          <div className={styles.half}>
            <div className={styles.inputField}>
              <span><PersonOutline/></span>
              <input type="text"
                     placeholder="First Name"
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.half}>
            <div className={styles.inputField}>
              <span><PersonOutline/></span>
              <input type="text"
                     placeholder="Last Name"
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.inputField}>
          <span><PhoneOutlined/></span>
          <input type="text"
                 placeholder="000-0000000"
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <select className={styles.selectContainer}
                onChange={e => setCity(e.target.value)}
        >
          <option>Select city</option>
          {cities.map(city => (
            <option>{city}</option>
          ))}
        </select>
      </div>
      <button className={styles.button}
              onClick={onClickHandler}
      >
        Create Account
      </button>
    </div>
  )
}

export default Register;