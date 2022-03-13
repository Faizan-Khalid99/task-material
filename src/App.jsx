import React from "react";
import HeaderBar from "./components/HeaderBar";
import Hero from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import TrackRecord from "./components/TrackRecord";
import Footer from "./components/Footer";
import { Container, ThemeProvider } from "@mui/material";
import { globalTheme } from "./Theme/theme";
const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={globalTheme}>
        <HeaderBar />
        <Container>
          <Hero />
          <PortfolioSection />
          <TrackRecord />
        </Container>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
