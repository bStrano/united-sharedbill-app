import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Background from '@components/Background';
import {FormattedMessage} from 'react-intl';
import {MESSAGES} from '@constants/messages-ids';
import ControlledTextInput from '@components/ControlledTextInput';
import ImageSelector from '@components/ImageSelector';
import Button from '@components/Button';
import {useMutation} from 'react-query';
import {GroupRegister} from 'types/GroupRegister';
import {useAppForm} from '@providers/FormProvider';
import Timeline from '@screens/Groups/Register/components/Timeline';
import {useNavigation} from '@react-navigation/native';

interface IGroupRegisterScreenProps {}

function GroupRegisterScreen(props: IGroupRegisterScreenProps) {
  const formContext = useAppForm();
  const styles = useMemo(() => styleSheet(), []);
  const navigation = useNavigation();

  const groupRegisterMutation = useMutation(
    async (groupRegister: GroupRegister) => {
      // return GroupAPI.register(groupRegister);
      console.log(groupRegister);
    },
  );

  const onSubmit = () => {
    formContext.onSubmit(async (data: GroupRegister) => {
      await groupRegisterMutation.mutateAsync(data);
      navigation.navigate('GroupInviteFriends');
    });
  };

  return (
    <Background style={styles.container}>
      <Timeline />
      <View style={{flex: 1}}>
        <View style={styles.contentContainer}>
          <ImageSelector id={'image'} />
          <View style={{flex: 1, marginHorizontal: 10}}>
            <ControlledTextInput
              id={'name'}
              label={<FormattedMessage id={MESSAGES.ids.INPUT_GROUP_NAME} />}
              returnKeyType="next"
              autoCapitalize="none"
            />
          </View>
        </View>

        <ControlledTextInput
          id={'description'}
          label={<FormattedMessage id={MESSAGES.ids.INPUT_GROUP_DESCRIPTION} />}
          returnKeyType="next"
          style={{marginHorizontal: 10}}
          multiline={true}
          textAlignVertical={'top'}
          numberOfLines={4}
        />
      </View>
      <Button id={MESSAGES.ids.BTN_GROUP_REGISTER} onPress={onSubmit} />
    </Background>
  );
}

const styleSheet = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      padding: 10,
      marginBottom: 30,
    },
    contentContainer: {
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default GroupRegisterScreen;
