import React, { useMemo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AppTheme, useAppTheme } from "../../App";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Entypo";

interface IFABProps {
  onPress(): void;
}

function FAB(props: IFABProps) {
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.touchableOpacity}>
      <LinearGradient colors={theme.colors.gradient} style={styles.container}>
        <Icon name={"plus"} color={theme.colors.onBackground} size={26} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styleSheet = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      height: 52,
      width: 52,
      borderRadius: 14,
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
    },
    touchableOpacity: {
      height: 52,
      width: 52,
      bottom: 15,
      right: 15,
      position: "absolute",
    },
  });
export default FAB;
