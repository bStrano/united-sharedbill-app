import Logo from "@components/Logo";
import { MESSAGES } from "@constants/messages-ids";
import { useSession } from "@providers/SessionProvider";
import React, { memo, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MD3Theme, Text } from "react-native-paper";
import { Navigation } from "types/Naviation";
import { useAppTheme } from "../../../../App";

import BackgroundLogin from "@components/BackgroundLogin";
import BackgroundInput from "@components/Inputs/BackgroundInput";
import LoginButton from "@components/LoginButton";
import { LoginSocialForm } from "./components/SocialLogin/LoginSocialForm";

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {
  const sessionContext = useSession();
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [showPassword, setShowPassword] = useState(false);

  const changePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  const _onLoginPressed = async () => {
    // await sessionContext.login(LoginTypeEnum.INTERNAL, {
    //   username: email.value,
    //   password: password.value,
    // });
    // const emailError = '';
    // emailValidator(email.value);
    // const passwordError = '';
    // passwordValidator(password.value);
    //
    // if (emailError || passwordError) {
    //   setEmail({...email, error: emailError});
    //   setPassword({...password, error: passwordError});
    //   return;
    // }
    //
  };

  return (
    <BackgroundLogin style={styles.container}>
      <Logo styles={styles.logo} />

      <Text style={styles.slogan}>
        <FormattedMessage id={MESSAGES.ids.SLOGAN} />
      </Text>

      <BackgroundInput
        placeholder=" Usuário"
        onChangeText={(text) => setEmail({ ...email, value: text })}
        value={email.value}
        keyboardType="email-address"
        startIcon={{ name: "person", width: 24, height: 24, color: "#FFF" }}
      />

      <BackgroundInput
        placeholder=" Senha"
        onChangeText={(text) => setPassword({ ...password, value: text })}
        value={password.value}
        secureTextEntry={showPassword ? false : true}
        startIcon={{ name: "key", width: 24, height: 24, color: "#FFF" }}
        endIcon={{
          name: showPassword ? "eye" : "eye_slash",
          width: 24,
          height: 24,
          color: "#FFF",
        }}
        onClickEndIcon={changePasswordVisible}
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={styles.label}>
            <FormattedMessage id={MESSAGES.ids.BTN_FORGOT_PASSWORD} />
          </Text>
        </TouchableOpacity>
      </View>

      <LoginButton id={MESSAGES.ids.BTN_LOGIN} onPress={_onLoginPressed} />

      <LoginSocialForm />

      <View style={styles.row}>
        <Text style={styles.label}>
          <FormattedMessage id={MESSAGES.ids.LABEL_LOGIN_REGISTER} />
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.link}>
            <FormattedMessage id={MESSAGES.ids.BTN_LOGIN_REGISTER} />
          </Text>
        </TouchableOpacity>
      </View>
    </BackgroundLogin>
  );
};

const styleSheet = (theme: MD3Theme) =>
  StyleSheet.create({
    logo: {
      height: 70,
      resizeMode: "contain",
      marginBottom: 20,
    },
    slogan: {
      color: "#FFF",
      fontFamily: "monospace",
    },
    container: {
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    loginSection: {
      width: "100%",
      borderRadius: 20,
      padding: 30,
      marginVertical: 24,
      backgroundColor: theme.colors.background,
    },
    forgotPassword: {
      width: "100%",
      alignItems: "flex-end",
      marginBottom: 24,
    },
    row: {
      flexDirection: "row",
    },
    label: {
      color: theme.colors.secondary,
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary,
      marginLeft: 4,
    },
  });

export default memo(LoginScreen);
