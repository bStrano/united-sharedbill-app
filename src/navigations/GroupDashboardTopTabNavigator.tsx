import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GroupDashboardScreen from '../screens/Groups/Detail/GroupDashboardScreen';
import GroupParticipantsScreen from '../screens/Groups/Detail/Participants/GroupParticipantsScreen';
import GroupTimelineScreen from '../screens/Groups/Detail/Timeline/GroupTimelineScreen';

const Tab = createMaterialTopTabNavigator();

export default function GroupDashboardTopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={GroupDashboardScreen} />
      <Tab.Screen name="Timeline" component={GroupTimelineScreen} />
      <Tab.Screen name="Participants" component={GroupParticipantsScreen} />
    </Tab.Navigator>
  );
}
