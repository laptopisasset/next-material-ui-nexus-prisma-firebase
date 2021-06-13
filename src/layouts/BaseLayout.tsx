import React, { FC } from "react";
import {
  makeStyles,
  Typography,
  Box,
  Button,
  IconButton,
} from "@material-ui/core";
import { Brightness7, Brightness4 } from "@material-ui/icons";

import Head from "next/head";

import { Header, Link } from "src/components";
import { useSettings } from "src/hooks";
import { THEMEVARAINT } from "src/constants";

const useStyles = makeStyles(() => ({
  main: {
    minHeight: "100vh",
  },
  linkandSettingsContanier: {
    marginLeft: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    maxWidth: "250px",
  },
}));

export const BaseLayout: FC<{ title: string }> = ({ children, title }) => {
  const classes = useStyles();

  const { variant, toggleTheme } = useSettings();

  const themeIcons = {
    [THEMEVARAINT.DARK]: (
      <IconButton onClick={toggleTheme}>
        <Brightness7 />
      </IconButton>
    ),
    [THEMEVARAINT.LIGHT]: (
      <IconButton onClick={toggleTheme}>
        <Brightness4 />
      </IconButton>
    ),
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <main className={classes.main}>
        <Header>
          <Typography variant="h3">Landing Page</Typography>
          <Box className={classes.linkandSettingsContanier}>
            {themeIcons[variant]}
            <Button
              variant="outlined"
              component={Link}
              noLinkStyle
              href="/login"
            >
              Login
            </Button>
            <Button
              variant="outlined"
              component={Link}
              noLinkStyle
              href="/signup"
            >
              Signup
            </Button>
          </Box>
        </Header>
      </main>
    </>
  );
};
