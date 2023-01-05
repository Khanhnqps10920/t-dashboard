import React from 'react';
import Notifs from './Notifs';
import userPhoto from '../../../assets/User-Photo.png';
import { useAuth } from '../../../contexts/Auth';
import Avatar from '../../Avatar/Avatar';

const HeaderRight = () => {
  const { identity } = useAuth();

  return (
    <div className="header__right">
      <Notifs />
      <span className="name--left">{identity?.email}</span>

      {identity?.avatar ? (
        <div className="user-photo">
          <img src={identity.avatar} />
        </div>
      ) : (
        <Avatar email={identity?.email} />
      )}
    </div>
  );
};

export default HeaderRight;
