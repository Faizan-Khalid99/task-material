import React from "react";
import HeaderBar from "./components/HeaderBar";
import Hero from "./components/HeroSection";
import { Container, Box, ThemeProvider } from "@mui/material";
import { globalTheme } from "./Theme/theme";
const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={globalTheme}>
        <HeaderBar />
        <Container>
          <Hero />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
