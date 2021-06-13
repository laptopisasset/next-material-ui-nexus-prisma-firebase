import React, { FC } from "react";
import { Container, Box } from "@material-ui/core";

import Head from "next/head";

export const BaseLayout: FC<{ title: string }> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Container maxWidth="sm">
        <Box my={4}>{children}</Box>
      </Container>
    </>
  );
};
