import React, { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GroupItem from "./Item/GroupItem";
import Headline from "../../../components/Headline";
import Background from "../../../components/Background";
import FAB from "@components/FAB";
import { useNavigation } from "@react-navigation/native";
import { useListGroupContext } from "@providers/group/ListGroupProvider";

interface GroupScreenPropsInterface {}

const DATA = [
  {
    id: 1,
    image:
      "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png",
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia augue eu lacus accumsan, ut venenatis turpis hendrerit. Cras aliquam mauris dui, semper rutrum nisl tincidunt sit amet. Donec scelerisque mi at purus aliquam molestie. Maecenas id elit vitae tortor rhoncus posuere. Donec ac urna eget tellus faucibus vulputate a at tortor. Fusce ac facilisis lectus, vitae maximus metus. Quisque luctus massa metus, ac laoreet felis congue ut.",
    participantsCount: 10,
  },
  {
    id: 2,
    image:
      "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png",
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia augue eu lacus accumsan, ut venenatis turpis hendrerit. Cras aliquam mauris dui, semper rutrum nisl tincidunt sit amet. Donec scelerisque mi at purus aliquam molestie. Maecenas id elit vitae tortor rhoncus posuere. Donec ac urna eget tellus faucibus vulputate a at tortor. Fusce ac facilisis lectus, vitae maximus metus. Quisque luctus massa metus, ac laoreet felis congue ut.",
    participantsCount: 10,
  },
  {
    id: 3,
    image:
      "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png",
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia augue eu lacus accumsan, ut venenatis turpis hendrerit. Cras aliquam mauris dui, semper rutrum nisl tincidunt sit amet. Donec scelerisque mi at purus aliquam molestie. Maecenas id elit vitae tortor rhoncus posuere. Donec ac urna eget tellus faucibus vulputate a at tortor. Fusce ac facilisis lectus, vitae maximus metus. Quisque luctus massa metus, ac laoreet felis congue ut.",
    participantsCount: 10,
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function GroupListScreen(props: GroupScreenPropsInterface) {
  const { groups } = useListGroupContext();
  const navigation = useNavigation();
  const onFABPress = useCallback(() => {
    navigation.navigate("GroupRegister");
  }, [navigation]);

  console.log("group", groups);

  return (
    <Background style={styles.container}>
      <Headline title={"Meus grupos"} />
      <FlatList
        data={DATA}
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
