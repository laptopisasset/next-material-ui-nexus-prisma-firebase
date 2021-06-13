import React, { FC } from "react";
import { useField } from "formik";

import { TextField as MuiTextField, TextFieldProps } from "@material-ui/core";

export const TextField: FC<
  Omit<TextFieldProps, "variant" | "helperText" | "error">
> = (props) => {
  const [field, meta] = useField(props.name);

  return (
    <MuiTextField
      {...field}
      {...props}
      variant="outlined"
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.error}
    />
  );
};
