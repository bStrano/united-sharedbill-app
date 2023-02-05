import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import Background from '../../../../components/Background';
import {GroupParticipantItem} from './components/GroupParticipantItem';

interface IGroupDashboardScreenProps {}

const Mock = [
  {
    participant: {
      name: 'Bruno Strano',
    },
    hasDebts: false,
  },
  {
    participant: {
      name: 'Gabriel Gondo',
    },
    hasDebts: true,
  },
];
function GroupDashboardScreen(props: IGroupDashboardScreenProps) {
  return (
    <Background>
      <FlatList
        data={Mock}
        contentContainerStyle={{paddingVertical: 10}}
        renderItem={({item}) => <GroupParticipantItem item={item} />}
      />
      <FAB
        label={'Adicionar participante'}
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
  },
});

export default GroupDashboardScreen;
