import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GroupListItemInterface} from '../../../../types/GroupItemInterface';
import {useNavigation} from '@react-navigation/native';

interface GroupItemPropsInterface {
  item: GroupListItemInterface;
}

function GroupItem({item}: GroupItemPropsInterface) {
  const navigation = useNavigation();

  const _onPress = () => {
    navigation.navigate('GroupStack');
  };

  return (
    <Card
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate('GroupStack', {screen: 'GroupDashboard'})
      }>
      <Card.Content style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png',
          }}
        />
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text variant="titleMedium">{item.name}</Text>
            <View style={styles.participantContainer}>
              <MaterialIcons name={'groups'} size={20} />
              <Text style={styles.participantText} variant="labelSmall">
                {item.participantsCount}
              </Text>
            </View>
          </View>
          <Text variant="bodySmall" numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    marginVertical: 5,
  },
  imageSection: {},
  innerContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  participantContainer: {flexDirection: 'row', alignItems: 'center'},
  participantText: {
    paddingLeft: 6,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingRight: 5,
  },
  image: {height: 60, width: 60},
});
export default GroupItem;
