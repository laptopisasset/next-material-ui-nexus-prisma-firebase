import React, { FC } from "react";

import { BaseLayout } from "src/layouts";

import { Copyright, Link, ProTip } from "src/components";
import { Typography, Button } from "@material-ui/core";

const AboutPage: FC = () => (
  <BaseLayout title="About">
    <Typography variant="h4" component="h1" gutterBottom>
      Next.js example
    </Typography>
    <Button variant="contained" component={Link} noLinkStyle href="/">
      Go to the main page
    </Button>
    <ProTip />
    <Copyright />
  </BaseLayout>
);

export default AboutPage;
