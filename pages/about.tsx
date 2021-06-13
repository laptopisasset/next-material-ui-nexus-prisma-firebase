import React, { FC } from "react";

import { BaseLayout } from "src/layouts";

import { Typography, Button } from "@material-ui/core";

const AboutPage: FC = () => (
  <BaseLayout>
    <Typography variant="h4" component="h1" gutterBottom>
      Next.js ewxample
    </Typography>
  </BaseLayout>
);

export default AboutPage;
