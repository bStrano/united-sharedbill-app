import React, {useCallback, useState} from 'react';
import {View} from 'react-native';

interface ISessionProviderProps {
  children: React.ReactNode;
}

interface SessionContextInterface {
  isLoggedIn: boolean;
  login(): void;
}

export const SessionContext = React.createContext(
  {} as SessionContextInterface,
);
function SessionProvider(props: ISessionProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <SessionContext.Provider value={{isLoggedIn, login}}>
      {props.children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
