import Background from "@components/Background";
import Button from "@components/Button";
import ControlledTextInput from "@components/ControlledTextInput";
import IconsModalSelect from "@components/Modals/IconsModalSelect/IconsModalSelect";
import { MESSAGES } from "@constants/messages-ids";
import { FormProvider, useAppForm } from "@providers/FormProvider";
import GroupRegisterProvider, {
  useGroupRegisterContext,
} from "@providers/group/GroupRegisterProvider";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { AppTheme, useAppTheme } from "App";
import { IconsEnum } from "libs/united-sharedbill-core/src/shared/enums/icons.enum";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { StyleSheet, View } from "react-native";
import { GroupRegister } from "types/GroupRegister";
interface IGroupRegisterScreenProps {}

function GroupRegisterScreen() {
  return (
    <GroupRegisterProvider>
      <GroupRegisterScreenContent />
    </GroupRegisterProvider>
  );
}
function GroupRegisterScreenContent(props: IGroupRegisterScreenProps) {
  const theme = useAppTheme();
  const formContext = useAppForm();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  const navigation = useNavigation();
  const { save } = useGroupRegisterContext();

  const changeIconValue = ({
    value,
  }: {
    value: keyof typeof IconsEnum | undefined;
  }) => {
    formContext.form.setValue("icon", value);
  };

  const onSubmit = () => {
    formContext.onSubmit(async (data: GroupRegister) => {
      await save(data);

      navigation.dispatch(
        CommonActions.reset({
          index: 2,
          routes: [
            { name: "CoreNavigator" },
            { name: "GroupStack" },
            { name: "GroupInviteFriends" },
          ],
        })
      );
    });
  };

  const icon =  formContext.form.watch('icon')

  return (
    <>
      <Background style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.contentContainer}>
            <IconsModalSelect changeIconValue={changeIconValue} value={icon}/>
            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <ControlledTextInput
                id={"title"}
                label={<FormattedMessage id={MESSAGES.ids.INPUT_GROUP_NAME} />}
                returnKeyType="next"
                autoCapitalize="none"
              />
            </View>
          </View>

          <ControlledTextInput
            id={"description"}
            label={
              <FormattedMessage id={MESSAGES.ids.INPUT_GROUP_DESCRIPTION} />
            }
            returnKeyType="next"
            style={{ marginHorizontal: 10 }}
            multiline={true}
            textAlignVertical={"top"}
            numberOfLines={4}
          />
        </View>
      </Background>
      <View style={styles.contentContainer}>
        <Button id={MESSAGES.ids.ACTION_CREATE_GROUP} onPress={onSubmit} />
      </View>
    </>
  );
}

const styleSheet = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      padding: 10,
      marginBottom: 30,
    },
    contentContainer: {
      margin: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    modal: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default GroupRegisterScreen;
