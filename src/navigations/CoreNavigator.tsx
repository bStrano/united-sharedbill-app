import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import FriendStack from './FriendStack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import GroupListScreen from '../screens/Groups/List/GroupListScreen';

const Tab = createMaterialBottomTabNavigator();

export default function CoreNavigator() {
  return (
    <Tab.Navigator shifting={true} compact={true}>
      <Tab.Screen
        name="GroupList"
        component={GroupListScreen}
        options={{
          tabBarLabel: 'Groups',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="group" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="FriendList"
        component={FriendStack}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({color}) => (
            <FontAwesome5Icon name="user-friends" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Settigns"
        component={FriendStack}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({color}) => (
            <AntDesign name="setting" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
