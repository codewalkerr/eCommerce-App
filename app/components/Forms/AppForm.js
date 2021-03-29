import { Formik } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
