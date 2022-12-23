import React from 'react'
import Notifs from './Notifs'
import userPhoto from '../../../assets/User-Photo.png'

const HeaderRight = () => {

    // name will be retrieved from context api
    const name = 'Kruluz Utsman'


    return (
        <div className="header__right">
            <Notifs />
            <span className='name--left'>{name}</span>
            <div className="user-photo">
                <img src={userPhoto} />
            </div>
        </div>
    )
}

export default HeaderRight