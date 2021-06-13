import { useContext } from "react";

import SettingsContext from "src/context/SettingsContext";

export const useSettings = () => {
  return useContext(SettingsContext);
};
