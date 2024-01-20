import { useAppForm } from "@providers/FormProvider";
import { SelectOption } from "@utils/convertEnumToSelectOptions";
import React, { useState } from "react";
import { useController } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const SelectInput = ({
  id,
  label,
  items,
}: {
  id: string;
  label: string;
  items: SelectOption[];
}) => {
  const formContext = useAppForm();
  const controller = useController({
    control: formContext.form.control,
    name: id,
  });

  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{ label, value: null }}
        items={items}
        onValueChange={(value) => controller.field.onChange(value)}
        value={controller.field.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SelectInput;
