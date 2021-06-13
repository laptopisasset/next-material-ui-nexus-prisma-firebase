import React from "react";

import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  singUporSignInContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
