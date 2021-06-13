import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  border: {
    borderBottom: "2px solid lightgray",
    width: "100%",
  },
  typographContainer: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
}));
export const DividerwithText = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <div className={classes.border} />
      <Typography
        component="span"
        variant="subtitle1"
        className={classes.typographContainer}
      >
        {children}
      </Typography>
      <div className={classes.border} />
    </Box>
  );
};

export default DividerwithText;
