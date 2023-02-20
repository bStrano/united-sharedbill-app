import React, {useCallback, useMemo} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppTheme, useAppTheme} from '../../App';
import {useAppForm} from '@providers/FormProvider';
import {useController} from 'react-hook-form';

interface IImageSelectorProps {
  id: string;
}

function ImageSelector(props: IImageSelectorProps) {
  const theme = useAppTheme();
  const styles = useMemo(() => {
    return styleSheet(theme);
  }, [theme]);
  const formContext = useAppForm();
  const controller = useController({
    control: formContext.form.control,
    name: props.id,
  });

  const launchGallery = useCallback(
    async () =>
      await launchImageLibrary(
        {mediaType: 'photo', selectionLimit: 1},
        selectedImage => {
          if (selectedImage.assets) {
            controller.field.onChange(selectedImage.assets[0]);
          }
          console.log(selectedImage);
        },
      ),
    [controller.field],
  );

  const content = useMemo(() => {
      if(controller.field.value){
          const asset = controller.field.value as Asset
        return <Image source={{uri: asset.uri}} style={{height: 65, width: 65, borderRadius: 10}}/>
      }
    return <Icon name={'image-search'} size={20} color={theme.colors.text} />;
  }, [theme.colors.text]);

  return (
    <TouchableOpacity style={styles.container} onPress={launchGallery}>
      {content}
    </TouchableOpacity>
  );
}

const styleSheet = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      height: 55,
      width: 55,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.card,
      borderRadius: 10,
    },
  });
export default ImageSelector;
