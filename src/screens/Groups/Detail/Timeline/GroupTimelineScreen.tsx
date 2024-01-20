import MonthNome from "@components/MonthNames";
import {
  ListTransactionProvider,
  useListTransactionContext,
} from "@providers/transaction/ListTransactionByGroupProvider";
import { GroupTimelineHeader } from "@screens/Groups/Detail/Timeline/Header/GroupTimelineHeader";
import React, { useCallback } from "react";
import { SectionList, StyleSheet, View } from "react-native";
import { GroupTimelineItem } from "./Item/GroupTimelineItem";
import FAB from "@components/FAB";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { GroupStackParamList } from "@navigations/GroupStack";

function GroupTimelineScreen({ groupId }: { groupId: string }) {
  return (
    <ListTransactionProvider groupId={groupId}>
      <GroupTimelineScreenContent groupId={groupId} />
    </ListTransactionProvider>
  );
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function GroupTimelineScreenContent({ groupId }: { groupId: string }) {
  const navigation = useNavigation<StackNavigationProp<GroupStackParamList>>();
  const { transactions } = useListTransactionContext();
  const onFABPress = useCallback(() => {
    navigation.navigate("CreateTransactionScreen", {
      groupId,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SectionList
        renderItem={({ item }) => <GroupTimelineItem transaction={item} />}
        renderSectionHeader={({ section: { year, month } }) => (
          <GroupTimelineHeader
            title={MonthNome({ monthNumber: +month }) + " " + year}
          />
        )}
        sections={transactions}
      />
      <FAB onPress={onFABPress} />
    </View>
  );
}

export default GroupTimelineScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
