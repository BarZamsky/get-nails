import React, { useState } from "react";
import styles from "../RegisterForm.module.scss"
import {
  MailOutline,
  LockOutlined,
  PersonOutline,
  PhoneOutlined
} from '@material-ui/icons';
import axios from "axios";
import Input from "../../../UI/Input";
import Select from "../../../UI/Select";
import Button from "../../../../../UI/Button";

const UserAccount = () => {
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
      phone_number: phone,
      email,
      password,
      city
    }

    axios.post('http://localhost:5000/auth/user-signup', body)
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
        <div className={styles.inputsRow}>
          <div className={styles.half}>
            <Input type="text"
                   placeholder="First Name"
                   value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}
                   icon={<PersonOutline/>}
            />
          </div>
          <div className={styles.half}>
            <Input type="text"
                   placeholder="Last Name"
                   value={lastName}
                   onChange={(e) => setLastName(e.target.value)}
                   icon={<PersonOutline/>}
            />
          </div>
        </div>
        <Input type="text"
               placeholder="000-0000000"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               icon={<PhoneOutlined/>}
        />
        <Select onChange={e => setCity(e.target.value)}/>
      </div>
      <Button onClick={onClickHandler} buttonText="Create Account" />
    </div>
  )
}

export default UserAccount;