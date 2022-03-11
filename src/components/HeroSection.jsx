import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as Hero } from "../images/hero.svg";

const HeroComponentStyles = makeStyles({
  intro: {
    marginTop: "50px",
  },
  introText: {
    paddingTop: "100px",
  },
  para: {
    fontWeight: "bold",
  },
  subText: {
      marginTop: "20px",
  }
});

const HeroSection = () => {
  const classes = HeroComponentStyles();
  return (
    <Container>
      <Box className={classes.intro}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Typography variant="h1" className={classes.introText}>
              <Box>
                Make money{" "}
                <Typography variant="h1" color="secondary">
                  {" "}
                  by understanding
                </Typography>{" "}
                what you invest in
              </Box>
            </Typography>
            <Typography variant="p">
              <Box className={classes.subText}>
                Get exclusive access to top tier projects With the{" "}
                <Typography variant="p" className={classes.para}>
                  {" "}
                  LearnPad — where knowledge is Power!
                </Typography>
                <Typography variant="body1">
                  Powered by<b> $GAINS </b>{" "}
                </Typography>
              </Box>
            </Typography>
            <Button variant="contained">
                Get Started
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Hero />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroSection;
