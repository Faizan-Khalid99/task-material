import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as Hero } from "../images/hero.svg";

const HeroComponentStyles = makeStyles({
  gridStyle: {
    borderLeft: "0.1px solid #E3E6EC",
    borderRight: "0.1px solid #E3E6EC",
    borderBottom: "0.1px solid #E3E6EC",
    paddingBottom: "30px",
    paddingLeft: "29px",
    paddingRight: "20px",
    borderLeftWidth: "0.1px",
    borderRightWidth: "0.1px",
    borderBottomWidth: "0.1px",
  },
  intro: {
    marginTop: "50px",
  },
  introText: {
    paddingTop: "130px",
  },
  para: {
    fontWeight: 700,
  },
  subText: {
    marginTop: "20px",
  },
  getStarted: {
    paddingTop: "40px",
  },
  getStartedButton: {
    width: "179px",
    borderRadius: "78px",
    height: "48px",
  },
  HeroStyle: {
    maxWidth: "100%",
  },
});

const HeroSection = () => {
  const classes = HeroComponentStyles();
  return (
    <Container>
      <Box className={classes.intro}>
        <Grid container spacing={1}>
          <Grid item xs={6} className={classes.gridStyle}>
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
          <Grid item xs={6} className={classes.gridStyle}>
            <Hero className={classes.HeroStyle} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroSection;
