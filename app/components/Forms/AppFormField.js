import React from "react";
import { StyleSheet } from "react-native";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...otherProps }) => {
  const { errors, setFieldTouched, touched, setFieldValue, values } =
    useFormikContext();

  return (
    <React.Fragment>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
