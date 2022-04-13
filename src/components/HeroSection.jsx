import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { ReactComponent as Hero } from "../images/hero.svg";
import { HeroComponentStyles } from "./Styles/HeroComponentStyles";

const HeroSection = () => {
  const classes = HeroComponentStyles();
  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="1200"
      className={classes.gridStyle}
    >
      <Container fixed>
        <Grid container spacing={0} alignItems="center">
          <Grid item lg={6} md={6} xs={12}>
            <Typography variant="h1" className={classes.introText}>
              Make money <br />
              <Typography variant="h1" color="secondary" component="span">
                {" "}
                by understanding <br />
              </Typography>{" "}
              what you invest in
            </Typography>
            <Typography variant="p">
              <Box className={classes.subText}>
                Get exclusive access to top tier projects <br /> With the{" "}
                <Typography variant="p" className={classes.para}>
                  {" "}
                  <b>LearnPad — where knowledge is Power!</b>
                </Typography>
                <Typography variant="body1">
                  Powered by<b> $GAINS </b>{" "}
                </Typography>
              </Box>
            </Typography>
            <Box className={classes.getStarted}>
              <Button
                className={classes.getStartedButton}
                size="large"
                variant="contained"
              >
                Get Started
              </Button>
            </Box>
          </Grid>
          <Grid item mt="31px" lg={6} md={6} xs={12}>
            <Hero className={classes.HeroStyle} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
