import React from 'react';
import '../../../src/index.scss'
import { Button, Form, Input } from 'antd'
import '../Login/login.scss'
import logo from '../../assets/image/Rectangle 337.png'
import loginImage from '../../assets/image/Artboard-113_WF-Automation-illustrations 1 (1).png'
export const Login = () => {
  console.log('login page');
  return <div>
    <div className='login'>
      <div className='login-wrapper'>
        <div className='login-wrapper-left'>
          <img src={loginImage} alt="" />
        </div>
        <div className='login-wrapper-right'>
          <div className='logo'>
            <img className='logo-img' src={logo}></img>
            <div className='logo-text'>ZARVIS</div>
          </div>
          <Form layout="vertical" >
            <div className='login-input'>
              <label>Username</label>
              <Input placeholder='Enter your username'></Input>
            </div>
            <div className='login-input'>
              <label>Password</label>
              <Input className='input-' type='password' placeholder='Enter your password'></Input>
            </div>
            <Button className='login-btn'>Login</Button>
          </Form>
        </div>
      </div>
    </div>
  </div>;
};
