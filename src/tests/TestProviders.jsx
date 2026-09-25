

import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#3498db",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  radius: {
    md: "8px",
  },
};

export const TestProviders = ({ store, children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);
