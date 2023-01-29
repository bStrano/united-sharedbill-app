import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';
import GroupItem from './Item/GroupItem';

interface GroupScreenPropsInterface {}

const DATA = [
  {
    id: 1,
    image:
      'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png',
    name: 'Group 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia augue eu lacus accumsan, ut venenatis turpis hendrerit. Cras aliquam mauris dui, semper rutrum nisl tincidunt sit amet. Donec scelerisque mi at purus aliquam molestie. Maecenas id elit vitae tortor rhoncus posuere. Donec ac urna eget tellus faucibus vulputate a at tortor. Fusce ac facilisis lectus, vitae maximus metus. Quisque luctus massa metus, ac laoreet felis congue ut.',
    participantsCount: 10,
  },
  {
    id: 2,
    image:
      'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png',
    name: 'Group 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia augue eu lacus accumsan, ut venenatis turpis hendrerit. Cras aliquam mauris dui, semper rutrum nisl tincidunt sit amet. Donec scelerisque mi at purus aliquam molestie. Maecenas id elit vitae tortor rhoncus posuere. Donec ac urna eget tellus faucibus vulputate a at tortor. Fusce ac facilisis lectus, vitae maximus metus. Quisque luctus massa metus, ac laoreet felis congue ut.',
    participantsCount: 10,
  },
  {
    id: 3,
    image:
      'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png',
    name: 'Group 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia augue eu lacus accumsan, ut venenatis turpis hendrerit. Cras aliquam mauris dui, semper rutrum nisl tincidunt sit amet. Donec scelerisque mi at purus aliquam molestie. Maecenas id elit vitae tortor rhoncus posuere. Donec ac urna eget tellus faucibus vulputate a at tortor. Fusce ac facilisis lectus, vitae maximus metus. Quisque luctus massa metus, ac laoreet felis congue ut.',
    participantsCount: 10,
  },
];

function GroupListScreen(props: GroupScreenPropsInterface) {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <GroupItem item={item} />}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default GroupListScreen;
