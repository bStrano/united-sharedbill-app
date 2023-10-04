import { AppTheme, useAppTheme } from "App";
import React, { memo, useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { DynamicSvgComponent, IconProps } from "../Icon/Icon";

type Props = React.ComponentProps<typeof TextInput> & {
  errorText?: string;
  startIcon?: IconProps;
  endIcon?: IconProps;
  type?: "password";
  onClickEndIcon?: () => void;
};

const BackgroundInput = ({
  errorText,
  startIcon,
  endIcon,
  type,
  onClickEndIcon,
  ...props
}: Props) => {
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet({ theme }), [theme]);
  const [focus, setFocus] = useState(false);

  const containerStyle = () => {
    return {
      ...styles.container,
      ...(focus ? styles.containerFocus : styles.containerBlur),
    };
  };

  return (
    <View style={containerStyle()}>
      {startIcon && (
        <View style={styles.iconStartContainer}>
          <DynamicSvgComponent {...startIcon} />
        </View>
      )}

      <TextInput
        style={[
          styles.input,
          focus || props.value ? styles.inputFocus : styles.inputBlur,
        ]}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholderTextColor={theme.colors.inputPlaceholder}
        {...props}
      />

      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}

      {endIcon && (
        <View style={styles.iconEndContainer}>
          <TouchableOpacity onPress={onClickEndIcon}>
            <DynamicSvgComponent {...endIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styleSheet = ({ theme }: { theme: AppTheme }) =>
  StyleSheet.create({
    container: {
      width: "100%",
      marginVertical: 12,
      flexDirection: "row",
      borderRadius: 10,
      height: 50,
    },
    containerBlur: {
      backgroundColor: theme.colors.inputBackgroud,
    },
    containerFocus: {
      backgroundColor: theme.colors.inputBackgroudFocus,
    },
    input: {
      width: "100%",
      flex: 1,
    },
    inputFocus: {
      color: theme.colors.inputText,
    },
    inputBlur: {
      color: theme.colors.inputPlaceholder,
    },
    iconStartContainer: {
      paddingHorizontal: 8,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.inputBackgroudIcon,
    },
    iconEndContainer: {
      paddingHorizontal: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    error: {
      fontSize: 14,
      color: theme.colors.error,
      paddingHorizontal: 4,
      paddingTop: 4,
    },
  });

export default memo(BackgroundInput);
