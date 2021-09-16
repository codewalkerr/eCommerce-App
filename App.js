import React, { Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import { TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import { colors } from "react-native-elements";
import { Switch } from "react-native-gesture-handler";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import navigationTheme from "./app/navigation/navigationTheme";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Fragment>
      <OfflineNotice />
      <Button
        title="Click"
        onPress={() => navigation.navigate("TweetDetails", { id: "1" })}
      />
    </Fragment>
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text> Tweets </Text>
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text> Tweets Deatils {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      options={({ route }) => ({
        title: route.params.id,
      })}
      component={TweetDetails}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>My Account</Text>
  </Screen>
);

const Profile = () => (
  <Screen>
    <Text>My Profile</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "dodgerblue",
      activeTintColor: "white",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" size={25} color="white" />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
