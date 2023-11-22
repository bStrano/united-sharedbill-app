import React, { useState } from "react";
import { Alert, Share, View } from "react-native";
import Background from "@components/Background";
import { Card, List, Text } from "react-native-paper";
import { useAppTheme } from "../../../../App";
import Button from "@components/Button";
import { MESSAGES } from "@constants/messages-ids";
import { FormattedMessage } from "react-intl";
import { GroupInviteFriendsScanQRCode } from "@screens/Groups/InviteFriends/ScanQRCode/GroupInviteFriendsScanQRCode";
import { CommonActions, useNavigation } from "@react-navigation/native";

interface IGroupInviteFriendsProps {}

function GroupInviteFriends(props: IGroupInviteFriendsProps) {
  const [qrcodeModalVisibility, setQRCodeModalVisibility] = useState(false);
  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const onScan = async () => {
    setQRCodeModalVisibility(true);
  };

  const onFriends = async () => {};

  const onClose = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "CoreNavigator" }, { name: "GroupStack" }],
      })
    );
  };

  return (
    <Background
      style={{
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 30,
        backgroundColor: "red",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text variant={"titleLarge"}>
          <FormattedMessage id={MESSAGES.ids.LABEL_INVITE_FRIENDS} />
        </Text>
        <Text variant={"labelSmall"}>
          <FormattedMessage id={MESSAGES.ids.LABEL_INVITE_FRIENDS} />
        </Text>

        <View style={{ marginBottom: 15, marginTop: 30 }}>
          <Text variant={"labelSmall"} style={{ marginBottom: 10 }}>
            <FormattedMessage id={MESSAGES.ids.LABEL_GROUP_CODE} />
          </Text>
          <Card
            style={{
              height: 35,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text variant={"titleLarge"}> A B C D 7 8 </Text>
          </Card>
        </View>

        <List.Section>
          <List.Item
            title={
              <FormattedMessage id={MESSAGES.ids.OPTION_INVITE_FRIENDS_APP} />
            }
            background={"red"}
            centered={true}
            description={
              <FormattedMessage
                id={MESSAGES.ids.OPTION_DESCRIPTION_INVITE_FRIENDS_APP}
              />
            }
            onPress={onFriends}
            left={(props) => (
              <List.Icon {...props} icon="human-greeting-variant" />
            )}
            right={(props) => <List.Icon {...props} icon={"chevron-right"} />}
          />
          <List.Item
            title={
              <FormattedMessage id={MESSAGES.ids.OPTION_INVITE_SHARE_LINK} />
            }
            description={
              <FormattedMessage
                id={MESSAGES.ids.OPTION_DESCRIPTION_INVITE_SHARE_LINK}
              />
            }
            onPress={onShare}
            centered={true}
            left={(props) => <List.Icon {...props} icon="share" />}
            right={(props) => <List.Icon {...props} icon={"chevron-right"} />}
          />

          <List.Item
            title={
              <FormattedMessage id={MESSAGES.ids.OPTION_INVITE_SCAN_QRCODE} />
            }
            description={
              <FormattedMessage
                id={MESSAGES.ids.OPTION_DESCRIPTION_INVITE_SCAN_QRCODE}
              />
            }
            onPress={onScan}
            left={(props) => <List.Icon {...props} icon="qrcode" />}
            right={(props) => <List.Icon {...props} icon={"chevron-right"} />}
          />
        </List.Section>
      </View>
      <GroupInviteFriendsScanQRCode
        visibility={qrcodeModalVisibility}
        setVisible={setQRCodeModalVisibility}
      />
      <Button id={MESSAGES.ids.ACTION_CLOSE} onPress={onClose} />
    </Background>
  );
}

export default GroupInviteFriends;
