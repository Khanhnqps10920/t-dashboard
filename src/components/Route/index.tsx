import React from 'react';

import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';
import { pages } from '../../utils/constant';

export const PrivateRoute = () => {
  const { authenticated, identity, loading } = useAuth();

  // handle check identity and redirect later
  const location = useLocation();
  // check auth and redirect
  if (!loading && !authenticated) {
    return <Navigate to={pages.LOGIN} />;
  }

  return (
    // Show the component only when the user is logged in
    <Outlet />
  );
};

export const PublicRoute = () => {
  const { authenticated, loading } = useAuth();

  if (!loading && authenticated) {
    return <Navigate to={pages.DASHBOARD} />;
  }

  return <Outlet />;
};
