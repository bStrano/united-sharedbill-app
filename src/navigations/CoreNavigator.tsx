import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import GroupListScreen from "../screens/Groups/List/GroupListScreen";
import FriendScreen from "../screens/Friends/List/FriendScreen";
import SettingScreen from "../screens/SettingScreen";
import { ListGroupProvider } from "@providers/group/ListGroupProvider";

const Tab = createMaterialBottomTabNavigator();

export default function CoreNavigator() {
  return (
    <Tab.Navigator shifting={true} compact={true} labeled={false}>
      <Tab.Screen
        name="GroupList"
        component={() => {
          return (
            <ListGroupProvider>
              <GroupListScreen />
            </ListGroupProvider>
          );
        }}
        options={{
          tabBarLabel: "Groups",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="group" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="FriendList"
        component={FriendScreen}
        options={{
          tabBarLabel: "Friends",
          tabBarIcon: ({ color }) => (
            <FontAwesome5Icon name="user-friends" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Settigns"
        component={SettingScreen}
        options={{
          tabBarLabel: "Friends",
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
