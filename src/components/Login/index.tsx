import React, { useState } from 'react';
import '../../../src/index.scss'
import { Button, Form, Input } from 'antd'
import '../Login/login.scss'
import logo from '../../assets/image/login-logo.png'
import loginImage from '../../assets/image/login-image.png'
import { useAuth } from '../../contexts/Auth';

type FormValuesType = {
  username: string,
  password: string
}

type AntDFormItemType = {
  name: string,
  label: string,
  type?: 'group' | 'search' | 'textarea' | 'password'
}

export const Login = () => {
  const { authProvider: { login, getIdentity }, setAuthState } = useAuth()
  const [loginError, setLoginError] = useState('');
  const [canSubmit, setCanSubmit] = useState(true);

  // Check password regex in rules if there is any
  const onLogin = async (values: FormValuesType) => {
    if (canSubmit) {
      try {
        setCanSubmit(false)
        const submitUsername = values.username.trim()
        await login(submitUsername, values.password);
        const identity = await getIdentity();
        if (identity) {
          setAuthState(true, identity);
        }
      } catch (err: any) {
        setLoginError(err.response.data.message)
      } finally {
        setCanSubmit(true)
      }
    }
    return;
  }
  // reset Error when input change
  const onFieldChange = () => {
    setLoginError('');
  }

  // formItems elements data
  const formItems: AntDFormItemType[] = [
    {
      name: 'username',
      label: 'Username',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password'
    }
  ]

  // create form.item elements
  const renderedFormItem = formItems.map((formItem) => {
    const rules = [{
      whitespace: true,
      required: true,
      message: `${formItem.label} can not be empty`
    }];
    const props = {
      placeholder: `Enter your ${formItem.label}`,
      className: "login__input__field"
    }

    let input;
    switch (formItem.type) {
      case 'password':
        input = <Input.Password {...props} />
        break;
      default:
        input = <Input {...props} />
        break;
    }

    return (
      <Form.Item key={formItem.name} className="login__input"
        name={formItem.name} label={formItem.label}
        rules={rules}
      >{input}
      </Form.Item>
    )
  })

  // return UI
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
          <Form layout="vertical"
            colon={false}
            onFinish={onLogin}
            onFieldsChange={onFieldChange}>
            {renderedFormItem}
            <Button htmlType='submit' className="login__btn">Login</Button>
          </Form>
          {loginError && <div className="login__error">{loginError}</div>}
        </div>
      </div>

    </div>)
};
