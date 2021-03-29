import React from "react";
import { StyleSheet } from "react-native";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...otherProps }) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

  return (
    <React.Fragment>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
