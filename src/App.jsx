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
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "./components/Form";
// import DataState from "./components/DataState";

AOS.init({
  once: false,
});

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={globalTheme}>
        <HeaderBar />
        <Hero />
        <PortfolioSection />
        <TrackRecord />
        <Form />
        <SlickSliderSection />
        <JoinSection />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
