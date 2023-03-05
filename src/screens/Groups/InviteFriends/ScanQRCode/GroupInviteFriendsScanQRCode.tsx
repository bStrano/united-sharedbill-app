import React, {Dispatch, SetStateAction} from 'react';
import {Dialog, Portal, Button} from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

interface GroupInviteFriendsScanQRCodePropsInterface {
  visibility: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const GroupInviteFriendsScanQRCode = ({
  visibility,
  setVisible,
}: GroupInviteFriendsScanQRCodePropsInterface) => {
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

  return (
    <Portal>
      <Dialog visible={visibility} onDismiss={() => console.log('X')}>
        <Dialog.Content
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <QRCode
            value="Just some string value"
            logo={{uri: base64Logo}}
            size={200}
            logoBackgroundColor="transparent"
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)}>Cancel</Button>
          <Button onPress={() => setVisible(false)}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
