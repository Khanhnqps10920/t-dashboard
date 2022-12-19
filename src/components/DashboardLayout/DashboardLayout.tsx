import React, { Children } from 'react';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <div>
      DashboardLayout
      <Outlet />
      layout footer
    </div>
  );
};
