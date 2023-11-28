import React, { useMemo } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Card, MD3Theme, Text } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { useNavigation } from "@react-navigation/native";
import { useAppTheme } from "../../../../../App";
import { GroupInterface } from "libs/united-sharedbill-core/src/modules/groups/entities/group.interface";
import { StackNavigationProp } from "@react-navigation/stack";
import { GroupStackParamList } from "@navigations/GroupStack";
import { DynamicSvgComponent } from "@components/Icon/Icon";
import { AuthenticatedStackParamList } from "@navigations/AuthenticatedStack";

interface GroupItemPropsInterface {
  item: GroupInterface;
}

function GroupItem({ item }: GroupItemPropsInterface) {
  const navigation =
    useNavigation<StackNavigationProp<AuthenticatedStackParamList>>();
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  // const _onPress = () => {
  //   navigation.navigate("GroupStack");
  // };

  console.log("item item", item);

  return (
    <Card
      style={styles.cardContainer}
      mode="elevated"
      onPress={() => navigation.navigate("GroupStack")}
    >
      <Card.Content style={styles.innerContainer}>
        {/* <Image
          style={styles.image}
          source={{
            uri: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png",
          }}
        /> */}

        <View style={styles.iconContainer}>
          <DynamicSvgComponent
            name={item.icon}
            width={46}
            height={46}
            color="#FFF"
          />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text variant="titleMedium" numberOfLines={1}>
              {item.title}
            </Text>
            <View style={styles.participantContainer}>
              <MaterialIcons
                name={"groups"}
                size={20}
                color={theme.colors.onBackground}
              />
              <Text style={styles.participantText} variant="labelSmall">
                {item.participantsCount}
              </Text>
            </View>
          </View>
          <Text variant="bodySmall" numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
}

const styleSheet = (theme: MD3Theme) =>
  StyleSheet.create({
    cardContainer: {
      margin: 10,
      marginVertical: 5,
    },
    imageSection: {},
    innerContainer: {
      flexDirection: "row",
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    participantContainer: { flexDirection: "row", alignItems: "center" },
    participantText: {
      paddingLeft: 6,
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 10,
      paddingRight: 5,
    },
    iconContainer: {
      height: 60,
      width: 60,
      backgroundColor: theme.colors.elevation.level2,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  });
export default GroupItem;
