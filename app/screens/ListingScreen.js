import React, { useState } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "react-native-elements";
import Card from "../components/Card";
import Screen from "../components/Screen";
import listingApi from "../api/listings";
import { useEffect } from "react";
import { Fragment } from "react";
import AppText from "../components/AppText";
import Button from "../components/AppButton";
import { ActivityIndicator } from "react-native";
import useApi from "../hooks/useApi";

const ListingScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <Fragment>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button title="Retry" onPress={loadListings} />
        </Fragment>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
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
