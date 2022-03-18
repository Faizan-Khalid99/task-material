import React from "react";
import HeaderBar from "./components/HeaderBar";
import Hero from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import TrackRecord from "./components/TrackRecord";
import JoinSection from "./components/JoinSection";
import Footer from "./components/Footer";
import SlickSliderSection from "./components/SlickSliderSection";
import { ThemeProvider } from "@mui/material";
import { globalTheme } from "./Theme/theme";
import DataState from "./components/DataState";

const App = () => {
  return (
    <React.Fragment>
      <DataState>
        <ThemeProvider theme={globalTheme}>
          <HeaderBar />
          <Hero />
          <PortfolioSection />
          <TrackRecord />
          <SlickSliderSection />
          <JoinSection />
          <Footer />
        </ThemeProvider>
      </DataState>
    </React.Fragment>
  );
};

export default App;
