import React from "react";

import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  singUporSignInContainer: {
    minHeight: "100vh",
  },
}));

export const SigninorSignUpLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.singUporSignInContainer}>
      {children}
    </Container>
  );
};
