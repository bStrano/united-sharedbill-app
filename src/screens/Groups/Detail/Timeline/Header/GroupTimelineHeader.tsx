import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface GroupTimelineHeaderPropsInterface {
  title: string;
}

export function GroupTimelineHeader(props: GroupTimelineHeaderPropsInterface) {
  return (
    <Text variant={"titleSmall"} style={styles.title}>
      {props.title}
    </Text>
  );
}
const styles = StyleSheet.create({
  title: {
    marginTop: 15,
    marginLeft: 15,
  },
});
