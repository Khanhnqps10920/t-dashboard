import React from 'react'
import './styles/Logo.scss'
import logo from '../../../assets/logo.png'
const Logo = () => {
    return (
        <div className='logo'>
            <div className="logo__wrapper">
                <div className="logo__img__wrapper">
                    <img src={logo} />
                </div>
                <span className='logo__text'>
                    ZARVIS
                </span>
            </div>
            <hr />
        </div>
    )
}

export default Logo