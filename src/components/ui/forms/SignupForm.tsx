import React from "react";
import { Formik, Form } from "formik";
import { Paper, makeStyles, Grid, Typography, Button } from "@material-ui/core";
import { TextField } from "./fields";
import DividerWithText from "../DividerWithText";

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: "400px",
    padding: theme.spacing(1),
  },
}));

export const SignupForm = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={console.log}
    >
      <Paper variant="outlined" classes={{ root: classes.paper }}>
        <Form>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="h3" align="center">
                SignUp
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                name="email"
                fullWidth
                type="email"
                label="Email"
                required
              />
            </Grid>
            <Grid item>
              <TextField
                name="password"
                fullWidth
                type="password"
                label="Password"
                required
              />
            </Grid>
            <Grid item>
              <TextField
                name="confirmPassword"
                fullWidth
                type="password"
                label="ConfirmPassword"
                required
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                SignUp
              </Button>
            </Grid>
            <DividerWithText>or</DividerWithText>
            <Grid item>
              <Typography variant="body1" align="center">
                Federated Signins
              </Typography>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </Formik>
  );
};
