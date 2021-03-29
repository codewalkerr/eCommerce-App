import React, { Component } from "react";
import { Image } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={25} />
      </View>

      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={25}
        />
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
    borderRadius: 50,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },

  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
