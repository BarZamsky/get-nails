import React, { useState } from "react";
import styles from "./Register.module.scss"
import {
  MailOutline,
  LockOutlined
} from '@material-ui/icons';

const Register = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');

  return (
    <div className={styles.container}>
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
      </div>
    </div>
  )
}

export default Register;