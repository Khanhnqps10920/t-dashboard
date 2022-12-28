import { AxiosError } from 'axios';
import authAxios from '../axios/Auth/instance';
import { AuthProvider, UserIdentity } from '../types';

export const authProvider: AuthProvider = {
  login: async (username: string, password: string): Promise<void> => {
    // call api login
    try {
      const userInfo = {
        username,
        password,
      }
      const response = await authAxios.post('/auth/login', userInfo);
      const accessToken = response.data['access_token']
      localStorage.setItem('accessToken', accessToken);
    } catch (err) {
      throw err
    }

  },
  logout: async (): Promise<void> => {
    // handle logout
    // delete Token and setAuthState to false,null
  },
  checkAuth: async (): Promise<boolean> => {
    // call api check auth (api.me)
    try {
      await authAxios.get('/me');
      return Boolean(true);
    } catch (err) {
      return Boolean(false);
    }
  },
  getIdentity: async (): Promise<UserIdentity | null> => {
    // call api get profile
    try {
      const response = await authAxios.get('/me');
      const data = response.data;
      return data
    } catch (err) {
      return null
    }
  },
};

export default authProvider;
