import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import GroupStack from './GroupStack';
import FriendStack from './FriendStack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();

export default function CoreNavigator() {
  return (
    <Tab.Navigator shifting={true} activeColor="#e91e63">
      <Tab.Screen
        name="GroupStack"
        component={GroupStack}
        options={{
          tabBarLabel: 'Groups',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="group" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FriendStack"
        component={FriendStack}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({color}) => (
            <FontAwesome5Icon name="user-friends" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingStack"
        component={FriendStack}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({color}) => (
            <AntDesign name="setting" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
