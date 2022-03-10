import React from "react";
import HeaderBar from "./components/HeaderBar";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { globalTheme } from "./Theme/theme";
const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={globalTheme}>
          <HeaderBar />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
