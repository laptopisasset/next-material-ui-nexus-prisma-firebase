import React, { FC } from "react";

import { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

import { withGlobalContext } from "src/utils";
import { useSettings } from "src/hooks";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { theme } = useSettings();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default withGlobalContext(MyApp);
