import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/load.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0.8,
    backgroundColor: "white",
    position: "absolute",
  },
});

export default ActivityIndicator;
