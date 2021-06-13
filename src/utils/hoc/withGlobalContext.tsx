import React, { ComponentType } from "react";
import { SettingsProvider } from "src/context";

export const withGlobalContext = (Component: ComponentType) => {
  return (props) => (
    <SettingsProvider>
      <Component {...props} />
    </SettingsProvider>
  );
};
