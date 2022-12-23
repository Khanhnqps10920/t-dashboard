import React from 'react';
import '../../../src/index.scss'
import { Button, Form, Input } from 'antd'
import '../Login/login.scss'
import logo from '../../assets/image/Rectangle 337.png'
import loginImage from '../../assets/image/Artboard-113_WF-Automation-illustrations 1 (1).png'
export const Login = () => {
  console.log('login page');
  return (
    <div className='login'>
      <div className='login__wrapper'>
        <div className='login__wrapper--left'>
          <img src={loginImage} alt="" />
        </div>
        <div className='login__wrapper--right'>
          <div className='logo'>
            <img className='logo__img' src={logo}></img>
            <div className='logo__text'>ZARVIS</div>
          </div>
          <Form layout="vertical" >
            <div className='login__input'>
              <label className='login__input--label'>Username</label>
              <Input placeholder='Enter your username'></Input>
            </div>
            <div className='login__input'>
              <label className='login__input--label'>Password</label>
              <Input type='password' placeholder='Enter your password'></Input>
            </div>
            <Button className='login__btn'>Login</Button>
          </Form>
        </div>
      </div>
    </div>)
};
