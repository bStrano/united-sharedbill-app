import React, { useMemo } from "react";
import { SectionList, View } from "react-native";
import { GroupTimelineItem } from "./Item/GroupTimelineItem";
import { GroupActivityTimelineSectionInterface } from "types/GroupActivityTimelineSectionInterface";
import { GroupTimelineHeader } from "@screens/Groups/Detail/Timeline/Header/GroupTimelineHeader";
import {
  ListTransactionProvider,
  useListTransactionContext,
} from "@providers/transaction/ListTransactionByGroupProvider";

interface IGroupDashboardScreenProps {}

// {
//   title: "Teste 1",
//   data: [
//     {
//       type: "NEW_EXPENSE",
//       date: new Date(),
//       isUserCreator: true,
//       debit: {
//         name: "Pastel de Queijo",
//         total: 12.3,
//         value: 6,
//       },
//       creator: {
//         name: "Bruno Strano",
//         id: 1,
//       },
//     },
//     {
//       date: new Date(),
//       type: "NEW_EXPENSE",
//       isUserCreator: true,
//       debit: {
//         name: "Pastel de Queijo",
//         total: 12.3,
//         value: 6,
//       },
//       creator: {
//         name: "Bruno Strano",
//         id: 1,
//       },
//     },
//   ],
// },
// {
//   title: "TITULO 2",
//   data: [
//     {
//       date: new Date(),
//       type: "NEW_EXPENSE",
//       isUserCreator: true,
//       debit: {
//         name: "Pastel de Queijo",
//         total: 12.3,
//         value: 6,
//       },
//       creator: {
//         name: "Bruno Strano",
//         id: 1,
//       },
//     },
//     {
//       date: new Date(),
//       isUserCreator: false,
//       type: "NEW_EXPENSE",
//       debit: {
//         name: "Pastel de Carne",
//         total: 14.3,
//         value: 6,
//       },
//       creator: {
//         name: "Gabriel Gondo",
//         id: 2,
//       },
//     },
//   ],
// },
function GroupTimelineScreen() {
  return (
    <ListTransactionProvider>
      <GroupTimelineScreenContent />
    </ListTransactionProvider>
  );
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function GroupTimelineScreenContent(props: IGroupDashboardScreenProps) {
  const { transactions } = useListTransactionContext();

  // const timeline: GroupActivityTimelineSectionInterface[] = useMemo(() => {}, [
  //   transactions,
  // ]);

  return (
    <View>
      <SectionList
        renderItem={({ item }) => <GroupTimelineItem data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <GroupTimelineHeader title={title} />
        )}
        sections={[]}
      />
    </View>
  );
}

export default GroupTimelineScreen;
