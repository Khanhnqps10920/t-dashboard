import React, { useState } from 'react';
import '../../../src/index.scss'
import { Button, Form, Input } from 'antd'
import '../Login/login.scss'
import logo from '../../assets/image/login-logo.png'
import loginImage from '../../assets/image/login-image.png'
import CustomModal from '../Modal';
import IModal from '../Modal/typesModal';

const modalProps : IModal = {
  mainTitle: 'Sample Modal',
  normalInput: [
      {
          title: 'Input Title',
          placeholder: 'ko biet ghi gi'
      },
      {
          title: 'Input Title',
          placeholder: 'ko biet ghi gi'
      },
  ],
  selectInput: [
      {
          title: 'text',
          options: [{ value: 'Hung', label: 'Hung' }, { value: 'BK', label: 'BK' }, { value: 'SP', label: 'SP' }]
      },
      {
          title: 'text',
          options: [{ value: 'IdolKDB', label: 'IdolKDB' }, { value: 'GOAT', label: 'GOAT' }, { value: 'LeBron', label: 'LeBron' }]
      },
  ],
  dateInput: [
      {
          title: 'Birthday',
          placeholder: 'mm/dd/yy'
      },
      {
          title: 'Your Grandma Birthday :>',
          placeholder: 'mm/dd/yy'
      }
  ],
  fileInput: [
      {
          title: 'Drag your file here',
          type: '.png,.jpeg,.jpg,.docx'
      },
      {
          title: 'Drag your file here',
          type: '.png,.jpeg,.jpg,.docx'
      },
  ],
  additionalInput:[
      {
          title: 'Additional Title',
          placeholder: 'ko biet ghi gi'
      },
      {
          title: 'Additional Title',
          placeholder: 'ko biet ghi gi'
      },
  ],
  textInput: [
      {
          title: 'Text Title',
          placeholder: 'ko biet ghi gi'
      },
      {
          title: 'Text Title',
          placeholder: 'ko biet ghi gi'
      },
  ],
  buttonContent: 'Submit'
};


export const Login = () => {
  console.log('login page');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='login'>
      <div className="login__wrapper">
        <div className="login__wrapper__left">
          <img src={loginImage} alt="" />
        </div>
        <div className="login__wrapper__right">
          <div className="logo">
            <img className="logo__img" src={logo}></img>
            <div className="logo__text">ZARVIS</div>
          </div>
          <Form layout="vertical" >
            <div className="login__input">
              <label className="login__input__label">Username</label>
              <Input placeholder='Enter your username'></Input>
            </div>
            <div className="login__input">
              <label className="login__input__label">Password</label>
              <Input type='password' placeholder='Enter your password'></Input>
            </div>
            <Button className="login__btn" onClick={()=>{setIsOpen(true)}}>Login</Button>
          </Form>
          <CustomModal modalProps={modalProps} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>)
};
