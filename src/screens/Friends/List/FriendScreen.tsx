import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FriendItem from "./Item/FriendItem";
import Headline from "../../../components/Headline";
import FAB from "@components/FAB";

interface FriendScreenPropsInterface {}

const DATA = [
  {
    id: 1,
    name: "Bruno Strano",
    balance: 1500,
    groupsInCommun: 2,
  },
  {
    id: 1,
    name: "Bruno Strano",
    balance: 1500,
    groupsInCommun: 2,
  },
  {
    id: 1,
    name: "Bruno Strano",
    balance: 1500,
    groupsInCommun: 3,
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FriendScreen(props: FriendScreenPropsInterface) {
  return (
    <View style={styles.container}>
      <Headline title={"Meus amigos"} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <FriendItem item={item} />}
      />
      <FAB onPress={() => console.log("Pressed")} />
    </View>
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
export default FriendScreen;
