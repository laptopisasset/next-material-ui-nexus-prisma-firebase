import React, { FC } from "react";

import { Container, Box } from "@material-ui/core";

export const BaseLayout: FC = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>{children}</Box>
    </Container>
  );
};
