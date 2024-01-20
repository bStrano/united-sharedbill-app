import { TransactionAPI } from "@apis/TransactionAPI";
import { TransactionTimelineSection } from "libs/united-sharedbill-core/src/modules/transactions/responses/timeline/transaction-timeline-section";
import React, { useContext } from "react";
import { useQuery } from "react-query";

interface ITransactionProviderProps {
  children: React.ReactNode;
  groupId: string;
}

interface ListTransactionContextInterface {
  transactions: TransactionTimelineSection[];
  isLoading: boolean;
}

const ListTransactionContext = React.createContext(
  {} as ListTransactionContextInterface
);

export function ListTransactionProvider(props: ITransactionProviderProps) {
  const groupId = props.groupId;

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
