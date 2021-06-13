import React, { FC } from "react";
import { Link as MuiLink, Typography } from "@material-ui/core";

export const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
};
