import Background from "@components/Background";
import Button from "@components/Button";
import ControlledTextInput from "@components/ControlledTextInput";
import IconsModalSelect from "@components/Modals/IconsModalSelect/IconsModalSelect";
import SelectInput from "@components/SelectInput";
import { MESSAGES } from "@constants/messages-ids";
import { useAppForm } from "@providers/FormProvider";
import CreateTransactionProvider, {
  useCreateTransactionContext,
} from "@providers/transaction/CreateTransactionProvider";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { AppTheme, useAppTheme } from "App";
import { IconsEnum } from "libs/united-sharedbill-core/src/shared/enums/icons.enum";
import React, { useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import { StyleSheet, View } from "react-native";
import { CreateTransaction } from "types/CreateTransaction";
import RNPickerSelect from "react-native-picker-select";
import { TransactionTypeEnum } from "libs/united-sharedbill-core/src/modules/transactions/enums/transaction-type.enum";
import { convertEnumToSelectOptions } from "@utils/convertEnumToSelectOptions";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GroupStackParamList } from "@navigations/GroupStack";
import { GroupAPI } from "@apis/GroupAPI";
import { GroupInterface } from "libs/united-sharedbill-core/src/modules/groups/entities/group.interface";
import { useQuery } from "react-query";

interface ICreateTransactionScreenProps {
  groupId: string;
}

type CreateTransactionScreenProps = NativeStackScreenProps<
  GroupStackParamList,
  "CreateTransactionScreen"
>;

function CreateTransactionScreen({ route }: CreateTransactionScreenProps) {
  const groupId = route.params?.groupId;

  return (
    <CreateTransactionProvider>
      <CreateTransactionScreenContent groupId={groupId} />
    </CreateTransactionProvider>
  );
}
function CreateTransactionScreenContent(props: ICreateTransactionScreenProps) {
  const theme = useAppTheme();
  const formContext = useAppForm();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  const navigation = useNavigation();

  const { save } = useCreateTransactionContext();
  const priorityOptions = convertEnumToSelectOptions(TransactionTypeEnum);

  const changeIconValue = ({
    value,
  }: {
    value: keyof typeof IconsEnum | undefined;
  }) => {
    formContext.form.setValue("icon", value);
  };

  const groupId = props.groupId;
  const { data: groups, isLoading } = useQuery(
    GroupAPI.Keys.findAll,
    GroupAPI.findAll
  );

  const group: GroupInterface | undefined = groups?.data?.find(
    (group: GroupInterface) => group.id === groupId
  );

  const onSubmit = () => {
    formContext.onSubmit(async (data: CreateTransaction) => {
      console.log("form", data);
      if (group?.id && group?.participants?.length) {
        const owners = [];
        const debtors = [];

        for (const participant of group.participants) {
          if (participant.userId === group.ownerId) {
            owners.push({
              value: +data.total,
              participantId: participant.id,
            });
          } else {
            debtors.push({
              value: 0,
              participantId: participant.id,
            });
          }
        }

        await save({
          ...data,
          groupId: group.id,
          owners,
          debtors,
          total: +data.total,
        });

        navigation.dispatch(
          CommonActions.reset({
            index: 2,
            routes: [{ name: "GroupDashboard" }],
          })
        );
      }
    });
  };

  return (
    <>
      <Background style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.contentContainer}>
            <IconsModalSelect changeIconValue={changeIconValue} />
            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <ControlledTextInput
                id={"title"}
                label={
                  <FormattedMessage id={MESSAGES.ids.LABEL_TRANSACTION_TITLE} />
                }
                returnKeyType="next"
                autoCapitalize="none"
              />
            </View>
          </View>

          <ControlledTextInput
            id={"description"}
            label={
              <FormattedMessage
                id={MESSAGES.ids.LABEL_TRANSACTION_DESCRIPTION}
              />
            }
            returnKeyType="next"
            style={{ marginHorizontal: 10 }}
            multiline={true}
            textAlignVertical={"top"}
            numberOfLines={4}
          />
          <ControlledTextInput
            id={"total"}
            label={
              <FormattedMessage id={MESSAGES.ids.LABEL_TRANSACTION_TITLE} />
            }
            returnKeyType="next"
            autoCapitalize="none"
            style={{ marginHorizontal: 10 }}
          />
          <SelectInput
            id={"transactionType"}
            label={"transaction type"}
            items={priorityOptions}
          />
        </View>
      </Background>
      <View style={styles.contentContainer}>
        <Button
          id={MESSAGES.ids.ACTION_CREATE_TRANSACTION}
          onPress={onSubmit}
        />
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

export default CreateTransactionScreen;
