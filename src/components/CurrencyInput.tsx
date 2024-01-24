import React, { memo, useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { MD3Theme, TextInput as Input, useTheme } from "react-native-paper";
import { useAppForm } from "@providers/FormProvider";
import { useController } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import ReactNativeCurrencyInput from "react-native-currency-input";

type Props = React.ComponentProps<typeof Input> & {
  errorText?: string;
  id: string;
};

const CurrencyInput = ({ id, ...props }: Props) => {
  const formContext = useAppForm();
  const controller = useController({
    control: formContext.form.control,
    name: id,
  });
  const theme = useTheme();
  const styles = useMemo(() => styleSheet({ theme }), [theme]);

  return (
    <View style={styles.container}>
      <ReactNativeCurrencyInput
        value={controller.field.value || 0}
        onChangeValue={(text) => {
          controller.field.onChange(text);
        }}
        renderTextInput={(textInputProps: any) => (
          <Input
            {...textInputProps}
            keyboardType="number-pad"
            style={styles.input}
            mode="outlined"
          />
        )}
        prefix="R$"
        delimiter="."
        separator=","
        precision={2}
      />
      {controller.fieldState.error?.message ? (
        <Text style={styles.error}>
          <FormattedMessage id={controller.fieldState.error.message} />
        </Text>
      ) : null}
    </View>
  );
};

const styleSheet = ({ theme }: { theme: MD3Theme }) =>
  StyleSheet.create({
    container: {
      width: "100%",
      marginVertical: 12,
    },
    input: {
      backgroundColor: theme.colors.surface,
    },
    error: {
      fontSize: 14,
      color: theme.colors.error,
      paddingHorizontal: 4,
      paddingTop: 4,
    },
  });

export default memo(CurrencyInput);
