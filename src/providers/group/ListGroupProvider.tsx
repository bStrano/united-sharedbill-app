import { GroupAPI } from "@apis/GroupAPI";
import { GroupInterface } from "libs/united-sharedbill-core/src/modules/groups/entities/group.interface";
import React, { useContext } from "react";
import { useQuery } from "react-query";

interface IListGroupProviderProps {
  children: React.ReactNode;
}

interface ListGroupContextInterface {
  groups: GroupInterface[];
  isLoading: boolean;
}

const ListGroupContext = React.createContext({} as ListGroupContextInterface);

export function ListGroupProvider(props: IListGroupProviderProps) {
  const { data, isLoading } = useQuery(GroupAPI.Keys.findAll, GroupAPI.findAll);

  return (
    <ListGroupContext.Provider
      value={{
        groups: data?.data || [],
        isLoading,
      }}
    >
      {props.children}
    </ListGroupContext.Provider>
  );
}

export const useListGroupContext = () => {
  return useContext(ListGroupContext);
};
