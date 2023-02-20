import React from 'react';
import {View} from 'react-native';
import {useMutation} from 'react-query';
import {UserRegisterInterface} from 'types/UserRegisterInterface';
import {GroupAPI} from "@apis/GroupAPI";
import {GroupRegister} from "types/GroupRegister";

interface IGroupRegisterProviderProps {}

function GroupRegisterProvider(props: IGroupRegisterProviderProps) {
  const registerGroupMutation = useMutation(
    async (groupRegister: GroupRegister) => {
      // return GroupAPI.register(groupRegister);
    },
  );

  return <View />;
}

export default GroupRegisterProvider;
