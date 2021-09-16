import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppText from "./AppText";
import { Image } from "react-native-expo-image-cache";

const Card = ({ title, subTitle, image, onPress, thumbnailUrl }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.img}
          preview={{ uri: thumbnailUrl }}
          tint="light"
          uri={image}
        />
        <View style={styles.detailContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}{" "}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },

  detailContainer: {
    padding: 20,
  },

  img: {
    width: "100%",
    height: 200,
  },

  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },

  title: {
    marginBottom: 7,
  },
});
