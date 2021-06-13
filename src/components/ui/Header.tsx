import React, { FC } from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Header: FC = ({ children }) => {
  return (
    <>
      <AppBar>
        <Toolbar>{children}</Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
