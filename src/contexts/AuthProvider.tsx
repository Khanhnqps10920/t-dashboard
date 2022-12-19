import { AuthProvider, UserIdentity } from '../types';

export const authProvider: AuthProvider = {
  login: async (username: string, password: string): Promise<void> => {
    // call api login
  },
  logout: async (): Promise<void> => {
    // handle logout
  },
  checkAuth: async (): Promise<boolean> => {
    // call api check auth (api.me)
    return Boolean(true);
  },
  getIdentity: async (): Promise<UserIdentity | null> => {
    // call api get profile

    // fake data

    // if want login just return fake data
    const fakeData = {
      id: '1',
      email: '222',
    };

    // return fakeData;
    return null;
  },
};

export default authProvider;
