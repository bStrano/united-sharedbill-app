import React from 'react';
import {ScrollView, View} from 'react-native';
import {Avatar, Divider, List, Text} from 'react-native-paper';
import Background from '../components/Background';
import {useSession} from '@providers/SessionProvider';

interface FriendScreenPropsInterface {}

function SettingScreen(props: FriendScreenPropsInterface) {
  const sessionContext = useSession();
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <Background>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            marginTop: 30,
          }}>
          <Avatar.Text size={45} label="BS" style={{marginRight: 15}} />
          <View>
            <Text variant={'headlineMedium'}>Bruno Strano</Text>
            <Text variant={'titleSmall'}>bruno_strano@hotmail.com</Text>
          </View>
        </View>

        <List.Section title="APP">
          <List.Item
            title="Meu Perfil"
            description="Item description"
            left={props => <List.Icon {...props} icon="account" />}
          />
          <Divider style={{marginVertical: 1}} />
          <List.Item
            title="Sobre o APP"
            description="Item description"
            left={props => <List.Icon {...props} icon="alpha-i-circle" />}
          />
          <List.Item
            title="Sair"
            description="Item description"
            left={props => <List.Icon {...props} icon="logout" />}
            onPress={() => sessionContext.logout()}
          />
        </List.Section>

        <List.Section title="Comentários">
          <List.Item
            title="Nos avalie"
            description="Item description"
            left={props => <List.Icon {...props} icon="star-face" />}
          />
          <Divider style={{marginVertical: 1}} />
          <List.Item
            title="Fale conosco"
            description="Item description"
            left={props => <List.Icon {...props} icon="bug" />}
          />
        </List.Section>
      </ScrollView>
    </Background>
  );
}

export default SettingScreen;
