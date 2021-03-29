import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "react-native-elements";
import Card from "../components/Card";
import Screen from "../components/Screen";
import screen from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Used Couch for sale",
    price: 100,
    image: require("../assets/couch.jpg"),
  },
];

const ListingScreen = (props) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
