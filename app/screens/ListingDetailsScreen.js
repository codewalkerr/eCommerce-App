import React from "react";
import { StyleSheet, Image, View } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = (props) => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> Jacket for sale</AppText>
        <AppText style={styles.price}> 80$</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/hasanali.jpg")}
            title="Hasan Ali"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },

  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  userContainer: {
    marginVertical: 40,
  },
});
