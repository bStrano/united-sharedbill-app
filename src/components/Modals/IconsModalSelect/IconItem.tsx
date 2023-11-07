import { DynamicSvgComponent } from "@components/Icon/Icon";
import { useAppTheme } from "App";
import { IconsEnum } from "libs/united-sharedbill-core/src/shared/enums/icons.enum";
import React, { Dispatch, SetStateAction, useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Card, MD3Theme, Text } from "react-native-paper";

interface IconInterface {
  name: keyof typeof IconsEnum;
}

interface GroupItemPropsInterface {
  item: IconInterface;
  setIconSelected({
    value,
  }: {
    value: keyof typeof IconsEnum | undefined;
  }): void;
}

function IconItem({ item, setIconSelected }: GroupItemPropsInterface) {
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);

  return (
    <TouchableOpacity onPress={() => setIconSelected({ value: item.name })}>
      <DynamicSvgComponent
        style={styles.item}
        name={item.name}
        width={40}
        height={40}
      />
    </TouchableOpacity>
  );
}

const styleSheet = (theme: MD3Theme) =>
  StyleSheet.create({
    item: {},
  });
export default IconItem;
