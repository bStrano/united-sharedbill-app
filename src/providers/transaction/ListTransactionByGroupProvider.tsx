import { TransactionAPI } from "@apis/TransactionAPI";
import { TransactionInterface } from "libs/united-sharedbill-core/src/modules/transactions/entities/transaction.interface";
import React, { useContext } from "react";
import { useQuery } from "react-query";

interface ITransactionProviderProps {
  children: React.ReactNode;
}

interface ListTransactionContextInterface {
  transactions: TransactionInterface[];
  isLoading: boolean;
}

const ListTransactionContext = React.createContext(
  {} as ListTransactionContextInterface
);

export function ListTransactionProvider(props: ITransactionProviderProps) {
  const groupId = "243c27cb-fdae-46f8-bbb4-06972d623fab";

  const { data, isLoading } = useQuery(TransactionAPI.Keys.findAllByGroup, () =>
    TransactionAPI.findAllByGroup({ groupId })
  );

  return (
    <ListTransactionContext.Provider
      value={{
        transactions: data?.data || [],
        isLoading,
      }}
    >
      {props.children}
    </ListTransactionContext.Provider>
  );
}

export const useListTransactionContext = () => {
  return useContext(ListTransactionContext);
};
