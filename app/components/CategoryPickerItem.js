import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

//PickerItem
const CategoryPickerItem = ({ onPress, item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          size={80}
          backgroundColor={item.backgroundColor}
          name={item.icon}
        />
      </TouchableOpacity>
      <AppText style={styles.label}> {item.label} </AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },

  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
