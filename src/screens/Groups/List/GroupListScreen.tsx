import React, { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GroupItem from "./Item/GroupItem";
import Headline from "../../../components/Headline";
import Background from "../../../components/Background";
import FAB from "@components/FAB";
import { useNavigation } from "@react-navigation/native";
import {
  ListGroupProvider,
  useListGroupContext,
} from "@providers/group/ListGroupProvider";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthenticatedStackParamList } from "@navigations/AuthenticatedStack";

interface GroupScreenPropsInterface {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars

function GroupListScreen(props: GroupScreenPropsInterface) {
  return (
    <ListGroupProvider>
      <GroupListScreenWithContent />
    </ListGroupProvider>
  );
}
function GroupListScreenWithContent(props: GroupScreenPropsInterface) {
  const { groups } = useListGroupContext();
  const navigation =
    useNavigation<StackNavigationProp<AuthenticatedStackParamList>>();
  const onFABPress = useCallback(() => {
    navigation.navigate("GroupRegister");
  }, [navigation]);

  return (
    <Background style={styles.container}>
      <Headline title={"Meus grupos"} />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GroupItem item={item} />}
      />
      <FAB onPress={onFABPress} />
    </Background>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
  },
});
export default GroupListScreen;
