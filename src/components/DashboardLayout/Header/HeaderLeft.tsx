import { useEffect, useState } from 'react';

import { useAuth } from '../../../contexts/Auth';

const HeaderLeft = () => {
  const { identity } = useAuth();
  // name will be retrieved from context api
  return (
    <div className="header__left">
      <div className="hello">Hello {identity?.email}</div>
    </div>
  );
};

export default HeaderLeft;
