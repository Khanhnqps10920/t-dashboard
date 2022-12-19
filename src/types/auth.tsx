import { UserIdentity } from './index';

export interface AuthProvider {
  // authentication
  login: (username: string, password: string) => Promise<void>;
  checkAuth: () => Promise<boolean>;
  logout: () => Promise<void>;
  getIdentity: () => Promise<UserIdentity | null>;
}

export interface AuthContextValues {
  loading: boolean;
  authenticated: boolean;
  identity?: UserIdentity | null;
  error?: Error;
  authProvider: AuthProvider;
  setAuthState: (
    authenticated: boolean,
    identity?: UserIdentity | null
  ) => void;
}

export interface AuthContextProviderParams {
  authProvider: AuthProvider;
  children: React.ReactNode;
}

export interface CustomRouteParams {
  // as react component
  component: any;
  [key: string]: any;
}
