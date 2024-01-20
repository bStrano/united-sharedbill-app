import React from "react";
import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { DebitInterface } from "types/DebitInterface";
import { GroupCreatorInterface } from "types/GroupCreatorInterface";

export function GroupTimelineItemDescription({
  transactionName,
  ownerName,
  total,
}: {
  transactionName: string;
  ownerName: string;
  total: number;
}) {
  return (
    <View style={styles.container}>
      <Text variant={"titleSmall"}>{transactionName}</Text>
      <Text variant={"labelSmall"}>
        {ownerName} pagou R$ {total}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
