import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useGoogle } from "@providers/GoogleProvider";
import { SessionAPI } from "@apis/SessionAPI";
import {
  RefreshSessionReturnInterface
} from "../../libs/united-sharedbill-core/src/modules/auth/returns/refresh-session-return.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageEnum } from "@constants/local-storage-keys";

interface ISessionProviderProps {
  children: React.ReactNode;
}

export enum LoginTypeEnum {
  GOOGLE = 'google',
  APPLE = 'apple',
  FACEBOOK = 'facebook',
  INTERNAL = 'internal',
}
interface SessionContextInterface {
  isLoggedIn: boolean;
  login(
    loginType: LoginTypeEnum,
    userCredentials?: {username: string; password: string},
  ): Promise<void>;
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

  const login = useCallback(
    async (
      type: LoginTypeEnum,
      userCredentials?: {username: string; password: string},
    ) => {
      let credentials: FirebaseAuthTypes.AuthCredential | undefined;
      let session:RefreshSessionReturnInterface;
      switch (type) {
        case LoginTypeEnum.GOOGLE:
          credentials = await googleContext.login();
          session = await SessionAPI.loginWithGoogle(credentials?.token!);
          break;
        case LoginTypeEnum.INTERNAL:
          await auth().signInWithEmailAndPassword(
            userCredentials!.username,
            userCredentials!.password,
          );
          session = await SessionAPI.loginWithInternal(userCredentials!.username, userCredentials!.password);
          break;
        default:
          throw new Error('Login type not supported');
      }

      if (credentials) {
        await createSession(session);
        await auth().signInWithCredential(credentials);
      }
    },
    [googleContext],
  );

  const isLoggedIn = useMemo(() => {
    return user != null;
  }, [user]);

  const createSession = useCallback(async (session?: RefreshSessionReturnInterface) => {
    if(!session) throw new Error('Session is required');
    await AsyncStorage.setItem(AsyncStorageEnum.ACCESS_TOKEN, session.accessToken);
    await AsyncStorage.setItem(AsyncStorageEnum.REFRESH_TOKEN, session.refreshToken);
  }, [])

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
    const refreshToken = await AsyncStorage.getItem(AsyncStorageEnum.REFRESH_TOKEN);
    await SessionAPI.logout(refreshToken!);
    await AsyncStorage.removeItem(AsyncStorageEnum.ACCESS_TOKEN);
    await AsyncStorage.removeItem(AsyncStorageEnum.REFRESH_TOKEN);
    await auth().signOut();
    console.log('User signed out!');
  }, []);

  useEffect(() => {
    // @ts-ignore
    return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
  }, [onAuthStateChanged]);

  return (
    <SessionContext.Provider value={{isLoggedIn, login, logout}}>
      {props.children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
