import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import {FriendItemInterface} from '../../../../types/FriendItemInterface';

interface IFriendItemProps {
  item: FriendItemInterface;
}

function FriendItem(props: IFriendItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Avatar.Text size={28} label="BS" />
        <View style={{flex: 1}}>
          <Text variant={'titleMedium'} style={styles.nameText}>
            {props.item.name}
          </Text>
          <Text variant={'labelSmall'} style={styles.nameText}>
            {props.item.groupsInCommun} grupos em comum
          </Text>
        </View>

        <Text variant={'bodyMedium'}>R$ {props.item.balance}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    flex: 1,
    paddingLeft: 15,
  },
});
export default FriendItem;
