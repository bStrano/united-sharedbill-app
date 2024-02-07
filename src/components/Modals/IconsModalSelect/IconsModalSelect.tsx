import { MESSAGES } from "@constants/messages-ids";
import { AppTheme, useAppTheme } from "App";
import React, { useEffect, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { Divider, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconItem from "./IconItem";
import { IconsEnum } from "libs/united-sharedbill-core/src/shared/enums/icons.enum";
import { DynamicSvgComponent } from "@components/Icon/Icon";

interface IGroupRegisterScreenProps {
  changeIconValue({
    value,
  }: {
    value: keyof typeof IconsEnum | undefined;
  }): void;

  value: keyof typeof IconsEnum | undefined;
  defaultValue?: keyof typeof IconsEnum | undefined;
}

function IconsModalSelect(props: IGroupRegisterScreenProps) {
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);

  useEffect(() => {
    if(!props.value){
      props.changeIconValue({value: props.defaultValue || 'eye'});
    }
  },[props.value])

  const changeIcon = ({
    value,
  }: {
    value: keyof typeof IconsEnum | undefined;
  }) => {
    props.changeIconValue({ value });
    setIconSelected(value);
    setModalVisible(false);
  };

  const [iconSelected, setIconSelected] = useState<
    keyof typeof IconsEnum | undefined
  >(props.defaultValue || 'eye');

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const DATA = Object.values(IconsEnum).map((item) => {
    return {
      name: item,
    };
  });

  return (
    <>
      <TouchableOpacity style={styles.iconSelectButton} onPress={toggleModal}>
        {iconSelected ? (
          <DynamicSvgComponent name={iconSelected} width={40} height={40} />
        ) : (
          <Icon name={"image-search"} size={20} />
        )}
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalCard}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>header</Text>
          </View>

          <Divider style={styles.divider} />
          <View style={styles.modalContent}>
            <FlatList
              data={DATA}
              numColumns={4}
              columnWrapperStyle={styles.row}
              renderItem={({ item }) => (
                <IconItem item={item} setIconSelected={changeIcon} />
              )}
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.modalBottom}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeModal}>
              <Text style={styles.closeButton}>
                <FormattedMessage id={MESSAGES.ids.ACTION_CLOSE} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styleSheet = (theme: AppTheme) =>
  StyleSheet.create({
    modal: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    modalCard: {
      borderRadius: 10,
      width: 300,
      height: 300,
      backgroundColor: theme.colors.background,
    },
    iconSelectButton: {
      height: 55,
      width: 55,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    divider: {
      margin: 2,
    },
    modalHeader: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    modalHeaderText: {
      // color: theme.colors.primary,
    },
    modalContent: {
      flex: 4,
    },
    modalBottom: {
      flex: 1,
    },
    closeModal: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    closeButton: {
      fontWeight: "800",
    },
    row: {
      flex: 1,
      justifyContent: "space-around",
      margin: 10,
    },
  });

export default IconsModalSelect;
