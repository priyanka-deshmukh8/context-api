import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

const Theme = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider value={{ theme, setTheme }}>{children}</ThemeProvider>
  );
};

export { Theme, ThemeConsumer };