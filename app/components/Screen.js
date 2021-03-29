import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Constants from "expo-constants";
import { View } from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[style, styles.view]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },

  view: {
    flex: 1,
  },
});

export default Screen;
