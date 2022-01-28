import React, { useState } from "react";
import styles from "../Register/components/RegisterForm.module.scss";
import Input from "../UI/Input";
import { LockOutlined, MailOutline } from "@material-ui/icons";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickHandler = () => {
    const body = {email, password};
    axios.post('http://localhost:5000/auth/login', body)
      .then(res => {
        const token = res && res.data && res.data.access_token;
        localStorage.setItem('token', token);
        localStorage.setItem('type', res.data.type);
      })
      .catch(e => console.log(e && e.message))
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={require('../../../../assets/images/neil-main.png')} alt="icon"/>
      <div className={styles.subTitle}>Type email and password in order to login</div>
      <div className={styles.inputs}>
        <Input type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               icon={<MailOutline/>}
        />
        <Input type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               icon={<LockOutlined/>}
        />
      </div>
      <button className={styles.button}
              onClick={onClickHandler}
      >
        Login
      </button>
    </div>
  )
}

export default Login;