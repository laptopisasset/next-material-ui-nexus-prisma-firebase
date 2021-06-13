import React, { useState, FC, useCallback } from "react";

import { darkTheme, lightTheme } from "src/theme";

import { THEMEVARAINT } from "src/constants";

const SettingsContext = React.createContext<{
  variant: THEMEVARAINT;
  theme: typeof darkTheme | typeof lightTheme;
}>({
  variant: THEMEVARAINT.DARK,
  theme: darkTheme,
});

export const SettingsProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const [variant, setVariant] = useState(THEMEVARAINT.DARK);

  const themes = {
    [THEMEVARAINT.DARK]: darkTheme,
    [THEMEVARAINT.LIGHT]: lightTheme,
  };

  const toggleTheme = useCallback(() => {
    if (variant === THEMEVARAINT.DARK) {
      setVariant(THEMEVARAINT.LIGHT);
    } else {
      setVariant(THEMEVARAINT.DARK);
    }

    setTheme(themes[variant]);
  }, [variant]);

  const value = {
    theme,
    variant,
    toggleTheme,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
