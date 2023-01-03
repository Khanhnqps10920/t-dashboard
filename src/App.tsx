import { useState } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/Auth';
import authProvider from './contexts/AuthProvider';
import { PrivateRoute, PublicRoute } from './components/Route';
import { Login } from './components/Login';
import { pages } from './utils/constant';
import { Home } from './components/Home';
import { DashboardLayout } from './components/DashboardLayout/DashboardLayout';
import { TestPage } from './components/SamplePage';

function App() {
  const [count, setCount] = useState('');

  return (
    <BrowserRouter>
      {/* <AuthContextProvider authProvider={authProvider}> */}
      <Routes>
        <Route path={pages.DASHBOARD} element={<PrivateRoute />}>
          <Route path={pages.DASHBOARD} element={<DashboardLayout type='dashboard' />}>
            <Route index element={<Home />} />
            <Route path={'/test'} element={<TestPage />} />
          </Route>
        </Route>

        <Route path={pages.LOGIN} element={<PublicRoute />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
