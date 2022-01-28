import React, { useState } from "react";
import axios from "axios";
import styles from "../RegisterForm.module.scss";
import Input from "../../../UI/Input";
import { LockOutlined, MailOutline, HomeOutlined, PhoneOutlined } from "@material-ui/icons";

const StudioAccount = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onClickHandler = () => {
    const body = {
      name,
      phone_number: phone,
      email,
      password
    }

    axios.post('http://localhost:5000/auth/studio-signup', body)
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e && e.message))
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={require('../../../../../../assets/images/neil-main.png')} alt="icon"/>
      <div className={styles.title}>Let's create an account</div>
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
        <Input type="text"
               placeholder="Studio name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               icon={<HomeOutlined/>}
        />
        <Input type="text"
               placeholder="000-0000000"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               icon={<PhoneOutlined/>}
        />
      </div>
      <button className={styles.button}
              onClick={onClickHandler}
      >
        Create Account
      </button>
    </div>

  )
}

export default StudioAccount;