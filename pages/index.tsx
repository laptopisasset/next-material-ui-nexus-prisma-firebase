import React, { FC } from "react";
import { Typography } from "@material-ui/core";

import { BaseLayout } from "src/layouts";

import { Link, ProTip, Copyright } from "src/components";

const IndexPage: FC = () => (
  <BaseLayout>
    <Typography variant="h4" component="h1" gutterBottom>
      Next.js v5-alpha with TypeScript example
    </Typography>
    <Link href="/about" color="secondary">
      Go to the about page
    </Link>
    <ProTip />
    <Copyright />
  </BaseLayout>
);

export default IndexPage;
