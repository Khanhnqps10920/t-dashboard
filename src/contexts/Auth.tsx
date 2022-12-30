import React from 'react';
import {
  AuthProvider,
  UserIdentity,
  AuthContextValues,
  AuthContextProviderParams,
} from '../types';

export const defaultProvider: AuthProvider = {
  login: (): Promise<void> => Promise.resolve(),
  logout: (): Promise<void> => Promise.resolve(),
  checkAuth: (): Promise<boolean> => Promise.resolve(false),
  getIdentity: (): Promise<UserIdentity | null> => Promise.resolve(null),
};

export const AuthContext = React.createContext<AuthContextValues>({
  authProvider: defaultProvider,
  loading: true,
  authenticated: false,
  identity: null,
  logOut: () => { },
  setAuthState: (
    _authenticated: boolean,
    _identity?: UserIdentity | null
  ) => { },
});

export const useAuthContextProvider = (
  authProvider: AuthProvider
): AuthContextValues => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(undefined);
  const [authenticated, setAuthenticated] = React.useState(false);
  const [identity, setIdentity] = React.useState<UserIdentity | null>();

  const setAuthState = React.useCallback(
    (authenticated: boolean, identity?: UserIdentity | null) => {
      setAuthenticated(authenticated);
      setIdentity(identity);
    },
    []
  );

  const logOut = React.useCallback(
    () => {
      localStorage.removeItem('accessToken');
      setAuthenticated(false);
      setIdentity(null);
    }, []
  )

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const identity = await authProvider.getIdentity();
        setIdentity(identity);
        setAuthenticated(identity ? true : false);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [authProvider]);
  return {
    loading,
    authenticated,
    identity,
    error,
    authProvider,
    logOut,
    setAuthState,
  };
};

export const AuthContextProvider = ({
  authProvider,
  children,
}: AuthContextProviderParams) => {
  const contextValue = useAuthContextProvider(authProvider);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () =>
  React.useContext(AuthContext) as unknown as AuthContextValues;
