import React from "react";
import { StyleSheet, Keyboard, Alert, View } from "react-native";
import * as Yup from "yup";
import { Notifications } from "expo";

import messages from "../../api/messages";

import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";

const validationSchema = Yup.object().shape({
  message: Yup.string().required("You can't send an empty message"),
});

const ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message");
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller.",
    });
  };
  return (
    <AppForm
      initialValues={{ message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <View style={styles.container}>
        <AppFormField name="message" placeholder="Message..." />
        <SubmitButton title="Contact Seller" />
      </View>
    </AppForm>
  );
};

export default ContactSellerForm;

const styles = StyleSheet.create({});
