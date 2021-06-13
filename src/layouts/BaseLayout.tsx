import React, { FC } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Head from "next/head";

import { Header } from "src/components";

const useStyles = makeStyles(() => ({
  main: {
    minHeight: "100vh",
  },
}));

export const BaseLayout: FC<{ title: string }> = ({ children, title }) => {
  const classes = useStyles();

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
        </Header>
      </main>
    </>
  );
};
