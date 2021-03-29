import React, { Component } from "react";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/bg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/hasan.png")} style={styles.logo} />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="black" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 20,
  },

  logoContainer: {
    position: "absolute",
    top: 20,
    alignItems: "center",
  },
});
