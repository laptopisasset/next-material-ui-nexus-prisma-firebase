import { Formik, Form } from "formik";
import React from "react";

export const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={console.log}
    >
      {() => <Form></Form>}
    </Formik>
  );
};
