import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GroupDashboardScreen from "../screens/Groups/Detail/GroupDashboardScreen";
import GroupParticipantsScreen from "../screens/Groups/Detail/Participants/GroupParticipantsScreen";
import GroupTimelineScreen from "../screens/Groups/Detail/Timeline/GroupTimelineScreen";
import { useAppTheme } from "App";
import { MESSAGES } from "@constants/messages-ids";
import { useIntl } from "react-intl";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GroupStackParamList } from "./GroupStack";

const Tab = createMaterialTopTabNavigator();

type GroupDashboardTopTabNavigatorProps = NativeStackScreenProps<
  GroupStackParamList,
  "GroupDashboard"
>;

export default function GroupDashboardTopTabNavigator({
  route,
}: GroupDashboardTopTabNavigatorProps) {
  const theme = useAppTheme();
  const intl = useIntl();

  const { groupId } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.onBackground,
      }}
    >
      <Tab.Screen
        name={intl.formatMessage({ id: MESSAGES.ids.LABEL_HOME })}
        component={GroupDashboardScreen}
      />
      <Tab.Screen
        name={intl.formatMessage({ id: MESSAGES.ids.LABEL_TIMELINE })}
        component={() => <GroupTimelineScreen groupId={groupId} />}
      />
      <Tab.Screen
        name={intl.formatMessage({ id: MESSAGES.ids.LABEL_PARTICIPANTS })}
        component={GroupParticipantsScreen}
      />
    </Tab.Navigator>
  );
}
