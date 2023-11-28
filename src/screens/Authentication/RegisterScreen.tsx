import React, { memo, useMemo } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Background from "../../components/Background";
import Header from "../../components/Header";
import { Navigation } from "types/Naviation";
import { MD3Theme, Text, useTheme } from "react-native-paper";
import { FormattedMessage } from "react-intl";
import { MESSAGES } from "@constants/messages-ids";
import ControlledTextInput from "@components/ControlledTextInput";
import { useAppForm } from "@providers/FormProvider";
import { useRegisterUserContext } from "@providers/RegisterUserProvider";
import { UserRegister } from "types/UserRegisterInterface";

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
  const formContext = useAppForm();
  const theme = useTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  const registerUserContext = useRegisterUserContext();

  const onSubmit = () => {
    formContext.onSubmit(
      async (data: UserRegister) =>
        await registerUserContext.registerUserMutation.mutate(data)
    );
  };

  return (
    <Background style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Logo />
        </View>

        <Header>
          <FormattedMessage id={MESSAGES.ids.LABEL_CRATE_ACCOUNT} />
        </Header>

        <ControlledTextInput
          id={"name"}
          label={<FormattedMessage id={MESSAGES.ids.INPUT_NAME} />}
          returnKeyType="next"
        />

        <ControlledTextInput
          id={"email"}
          label={<FormattedMessage id={MESSAGES.ids.INPUT_EMAIL} />}
          returnKeyType="next"
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <ControlledTextInput
          label={<FormattedMessage id={MESSAGES.ids.INPUT_PASSWORD} />}
          id={"password"}
          returnKeyType="next"
          secureTextEntry
        />

        <ControlledTextInput
          label={<FormattedMessage id={MESSAGES.ids.INPUT_CONFIRM_PASSWORD} />}
          id={"confirmPassword"}
          returnKeyType="done"
          secureTextEntry
        />

        <Button
          id={MESSAGES.ids.ACTION_REGISTER}
          onPress={onSubmit}
          isLoading={registerUserContext.registerUserMutation.isLoading}
        />
        <View style={styles.row}>
          <Text style={styles.label}>
            <FormattedMessage id={MESSAGES.ids.LABEL_ALREADY_REGISTERED} />
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.link}>
              <FormattedMessage id={MESSAGES.ids.ACTION_LOGIN} />
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background>
  );
};

const styleSheet = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 20,
    },
    label: {
      color: theme.colors.secondary,
    },
    button: {
      marginTop: 24,
    },
    row: {
      flexDirection: "row",
      marginTop: 4,
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary,
    },
  });

export default memo(RegisterScreen);
