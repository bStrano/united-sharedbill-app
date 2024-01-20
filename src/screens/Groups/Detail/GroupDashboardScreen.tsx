import FAB from "@components/FAB";
import { GroupStackParamList } from "@navigations/GroupStack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function GroupDashboardScreen({ groupId }: { groupId: string }) {
  const navigation = useNavigation<StackNavigationProp<GroupStackParamList>>();

  const onFABPress = useCallback(() => {
    navigation.navigate("CreateTransactionScreen", {
      groupId,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FAB onPress={onFABPress} />
    </View>
  );
}

export default GroupDashboardScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
