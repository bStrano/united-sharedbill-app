import React, { useMemo } from "react";
import { SectionList, View } from "react-native";
import { GroupTimelineItem } from "./Item/GroupTimelineItem";
import { GroupActivityTimelineSectionInterface } from "types/GroupActivityTimelineSectionInterface";
import { GroupTimelineHeader } from "@screens/Groups/Detail/Timeline/Header/GroupTimelineHeader";
import {
  ListTransactionProvider,
  useListTransactionContext,
} from "@providers/transaction/ListTransactionByGroupProvider";
import MonthNome from "@components/MonthNames";

interface IGroupDashboardScreenProps {}

function GroupTimelineScreen({ groupId }: { groupId: string }) {
  console.log(groupId);
  return (
    <ListTransactionProvider groupId={groupId}>
      <GroupTimelineScreenContent />
    </ListTransactionProvider>
  );
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function GroupTimelineScreenContent(props: IGroupDashboardScreenProps) {
  const { transactions } = useListTransactionContext();

  return (
    <View>
      <SectionList
        renderItem={({ item }) => <GroupTimelineItem transaction={item} />}
        renderSectionHeader={({ section: { year, month } }) => (
          <GroupTimelineHeader
            title={MonthNome({ monthNumber: +month }) + " " + year}
          />
        )}
        sections={transactions}
      />
    </View>
  );
}

export default GroupTimelineScreen;
