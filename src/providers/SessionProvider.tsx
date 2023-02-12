import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useGoogle} from '@providers/GoogleProvider';

interface ISessionProviderProps {
  children: React.ReactNode;
}

export enum LoginTypeEnum {
  GOOGLE = 'google',
  APPLE = 'apple',
  FACEBOOK = 'facebook',
}
interface SessionContextInterface {
  isLoggedIn: boolean;
  login(loginType: LoginTypeEnum): Promise<void>;
  logout(): Promise<void>;
}

const SessionContext = React.createContext({} as SessionContextInterface);

export const useSession = () => {
  return useContext(SessionContext);
};
function SessionProvider(props: ISessionProviderProps) {
  const googleContext = useGoogle();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  console.log('User', user);
  const login = useCallback(
    async (type: LoginTypeEnum) => {
      let credentials: FirebaseAuthTypes.AuthCredential | undefined;
      switch (type) {
        case LoginTypeEnum.GOOGLE:
          credentials = await googleContext.login();
          break;
      }
      console.log('Credentials', credentials);
      if (credentials) {
        await auth().signInWithCredential(credentials);
      }
    },
    [googleContext],
  );

  const isLoggedIn = useMemo(() => {
    return user != null;
  }, [user]);

  // Handle user state changes
  const onAuthStateChanged = useCallback(
    (authState: {
      _auth: FirebaseAuthTypes.AuthProvider;
      _user: FirebaseAuthTypes.User;
    }) => {
      if (!authState) {
        setUser(null);
      } else {
        setUser(authState._user);
      }
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing],
  );

  const logout = useCallback(async () => {
    await auth().signOut();
    console.log('User signed out!');
  }, []);

  useEffect(() => {
    // @ts-ignore
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  return (
    <SessionContext.Provider value={{isLoggedIn, login, logout}}>
      {props.children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
