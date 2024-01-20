import React from "react";
import { StyleSheet, View } from "react-native";
import { GroupActivityTimelineInterface } from "types/GroupActivityTimelineInterface";
import { GroupTimelineItemDay } from "@screens/Groups/Detail/Timeline/Item/Day/GroupTimelineItemDay";
import { GroupTimelineItemIcon } from "@screens/Groups/Detail/Timeline/Item/Icon/GroupTimelineItemIcon";
import { GroupTimelineItemDescription } from "@screens/Groups/Detail/Timeline/Item/Description/GroupTimelineItemDescription";
import { GroupTimelineItemValues } from "@screens/Groups/Detail/Timeline/Item/Values/GroupTimelineItemValues";
import { TransactionTimelineSection } from "libs/united-sharedbill-core/src/modules/transactions/responses/timeline/transaction-timeline-section";
import { TransactionTimelineContent } from "libs/united-sharedbill-core/src/modules/transactions/responses/timeline/transaction-timeline-content";
import { Text } from "react-native-paper";

interface GroupTimelineItemPropsInterface {
  transaction: TransactionTimelineContent;
}

export function GroupTimelineItem({
  transaction,
}: {
  transaction: TransactionTimelineContent;
}) {
  const styles = styleSheet();

  return (
    <View style={styles.container}>
      <GroupTimelineItemDay date={new Date(transaction.createdAt)} />
      <GroupTimelineItemIcon color={"#ffebea"} />

      <View style={styles.container2}>
        <Text variant={"titleSmall"}>{transaction.title}</Text>
        <Text variant={"labelSmall"}>
          {transaction.owners[0].name} pagou R$ {transaction.owners[0].amount}
        </Text>
      </View>

      <GroupTimelineItemValues
        isCreator={transaction.isOwner}
        debit={{
          value: transaction.userAmount,
        }}
      />
    </View>
  );
}

const styleSheet = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      margin: 15,
      alignItems: "center",
    },
    container2: {
      flex: 1,
    },
  });
