import { TransactionAPI } from "@apis/TransactionAPI";
import { FormProvider } from "@providers/FormProvider";
import React, { useContext } from "react";
import { useIntl } from "react-intl";
import Toast from "react-native-toast-message";
import { useMutation } from "react-query";
import { CreateTransaction } from "types/CreateTransaction";

interface ICreateTransactionProviderProps {
  children: React.ReactNode;
}

interface CreateTransactionContextInterface {
  save(form: any): void;
  isSaving: boolean;
}

const CreateTransactionContext = React.createContext(
  {} as CreateTransactionContextInterface
);

export const useCreateTransactionContext = () => {
  return useContext(CreateTransactionContext);
};

function CreateTransactionProvider(props: ICreateTransactionProviderProps) {
  const intl = useIntl();

  const { mutate: mutateSave, isLoading: isSaving } = useMutation(
    TransactionAPI.Keys.save,
    TransactionAPI.save,
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
          text1: intl.formatMessage({ id: "SUCCESSES_TRANSACTION_CREATED" }),
        });
      },
    }
  );

  const save = (form: CreateTransaction) => {
    mutateSave(form);
  };

  return (
    <CreateTransactionContext.Provider
      value={{
        save,
        isSaving,
      }}
    >
      <FormProvider formClass={CreateTransaction}>
        {props.children}
      </FormProvider>
    </CreateTransactionContext.Provider>
  );
}

export default CreateTransactionProvider;
