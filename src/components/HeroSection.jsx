import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as Hero } from "../images/hero.svg";

const HeroComponentStyles = makeStyles((theme) => ({
  gridStyle: {
    borderBottom: "0.1px solid #E3E6EC",
    paddingBottom: "20px",
    paddingLeft: "29px",
    paddingRight: "20px",
    paddingTop: "42.69px",
    borderBottomWidth: "0.1px",
    "& .MuiGrid-root .MuiGrid-item": {
      [theme.breakpoints.down("md")]: {
        // paddingLeft: "0px",
        paddingTop: "32px",
      },
    },
  },
  intro: {
    marginTop: "50px",
  },
  introText: {
    paddingTop: "110px",
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
    height: "auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "535px",
      height: "auto",
    },
  },
}));

const HeroSection = () => {
  const classes = HeroComponentStyles();
  return (
    <Box className={classes.gridStyle}>
      <Container fixed>
        <Grid container spacing={1}>
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
          <Grid item mt = "31px" lg={6} md={6} xs={12}>
            <Hero className={classes.HeroStyle} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
