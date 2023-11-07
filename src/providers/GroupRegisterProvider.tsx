import { GroupAPI } from "@apis/GroupAPI";
import React, { useContext } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import { useMutation } from "react-query";
import { GroupRegister } from "types/GroupRegister";
import { useIntl } from "react-intl";
import { FormProvider } from "./FormProvider";

interface IGroupRegisterProviderProps {
  children: React.ReactNode;
}

interface GroupRegisterContextInterface {
  save(form: any): void;
  isSaving: boolean;
}

const GroupRegisterContext = React.createContext(
  {} as GroupRegisterContextInterface
);

export const useGroupRegisterContext = () => {
  return useContext(GroupRegisterContext);
};

function GroupRegisterProvider(props: IGroupRegisterProviderProps) {
  const intl = useIntl();

  const { mutate: mutateSave, isLoading: isSaving } = useMutation(
    GroupAPI.Keys.save,
    GroupAPI.save,
    {
      onError(err) {
        Toast.show({
          type: "error",
          text1: intl.formatMessage({ id: "AN_ERROR_HAS_OCCURRED" }),
        });
      },
      onSuccess() {
        Toast.show({
          type: "success",
          text1: intl.formatMessage({ id: "GROUP_CREATED_SUCCESSFULLY" }),
        });
      },
    }
  );

  const save = (form: GroupRegister) => {
    mutateSave(form);
  };

  return (
    <GroupRegisterContext.Provider
      value={{
        save,
        isSaving,
      }}
    >
      <FormProvider formClass={GroupRegister}>{props.children}</FormProvider>
    </GroupRegisterContext.Provider>
  );
}

export default GroupRegisterProvider;
