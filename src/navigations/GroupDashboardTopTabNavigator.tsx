import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GroupDashboardScreen from "../screens/Groups/Detail/GroupDashboardScreen";
import GroupParticipantsScreen from "../screens/Groups/Detail/Participants/GroupParticipantsScreen";
import GroupTimelineScreen from "../screens/Groups/Detail/Timeline/GroupTimelineScreen";
import { useAppTheme } from "App";
import { MESSAGES } from "@constants/messages-ids";
import { useIntl } from "react-intl";

const Tab = createMaterialTopTabNavigator();

export default function GroupDashboardTopTabNavigator() {
  const theme = useAppTheme();
  const intl = useIntl();

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
        component={GroupTimelineScreen}
      />
      <Tab.Screen
        name={intl.formatMessage({ id: MESSAGES.ids.LABEL_PARTICIPANTS })}
        component={GroupParticipantsScreen}
      />
    </Tab.Navigator>
  );
}
