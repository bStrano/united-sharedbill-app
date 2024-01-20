import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import React, { useCallback, useContext } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useFeedback } from "@hooks/useFeedback";

GoogleSignin.configure({
  webClientId:
    "131856245356-94m33oeeii24kmjp1o586nls59ad8pii.apps.googleusercontent.com",
});

interface GoogleProviderPropsInterface {
  children: React.ReactNode;
}

interface GoogleContextInterface {
  login(): Promise<FirebaseAuthTypes.AuthCredential | undefined>;
}

const GoogleContext = React.createContext({} as GoogleContextInterface);

export const useGoogle = () => {
  return useContext(GoogleContext);
};
export function GoogleProvider(props: GoogleProviderPropsInterface) {
  const { showErrorFeedback } = useFeedback();

  const login = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const googleInfo = await GoogleSignin.signIn();
      // Create a Google credential with the token
      return auth.GoogleAuthProvider.credential(googleInfo.idToken);
    } catch (error: any) {
      console.error(error);
      console.error(error.message);
      console.error(error.code);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        showErrorFeedback({
          title: "Falha ao autenticar",
          message: "Play services not available or outdated",
        });
        // play services not available or outdated
      } else {
        showErrorFeedback({
          title: "Falha ao autenticar",
          message: "Ocorreu um erro inesperado ao se autenticar",
        });
        // some other error happened
      }
    }
  }, [showErrorFeedback]);

  return (
    <GoogleContext.Provider value={{ login }}>
      {props.children}
    </GoogleContext.Provider>
  );
}
