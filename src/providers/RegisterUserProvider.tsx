import React, {useCallback, useContext} from 'react';
import {useMutation, UseMutationResult} from 'react-query';
import {UserRegisterInterface} from 'types/UserRegisterInterface';
import auth from '@react-native-firebase/auth';

interface IRegisterUserProviderProps {
  children: React.ReactNode;
}

interface RegisterUserContextInterface {
  registerUserMutation: UseMutationResult<
    unknown,
    unknown,
    UserRegisterInterface,
    unknown
  >;
}

const RegisterUserContext = React.createContext(
  {} as RegisterUserContextInterface,
);

export const useRegisterUserContext = () => {
  return useContext(RegisterUserContext);
};
function RegisterUserProvider(props: IRegisterUserProviderProps) {
  const registerUser = useCallback(async (email: string, password: string) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created & signed in!');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    }
  }, []);

  const registerUserMutation = useMutation(
    async (registerUserParam: UserRegisterInterface) => {
      await registerUser(registerUserParam.email, registerUserParam.password);
      // return UserAPI.register(registerUserParam);
    },
  );

  return (
    <RegisterUserContext.Provider value={{registerUserMutation}}>
      {props.children}
    </RegisterUserContext.Provider>
  );
}

export default RegisterUserProvider;
