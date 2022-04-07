import React from "react";
import { Button, Box, Grid, Typography, Container } from "@mui/material";
import TransparentSvg from "../images/Transparent.svg";
import { useStyles } from "./Styles/useStyles";
const JoinSection = () => {
  const classes = useStyles();
  return (
    <Box data-aos="fade-up" data-aos-duration="1200">
      <Container fixed className={classes.root}>
        <Grid container spacing={0}>
          <Grid item lg={7} md={12}>
            <Box className={classes.subHeading}>
              <Typography variant="subHeader">
                Behind every successful project is a successful community.{" "}
              </Typography>
            </Box>
            <Box className={classes.Joining}>
              <Typography variant="JoinLearnPad">
                Join the LearnPad to{" "}
                <Typography variant="JoinLearnPad" color="secondary">
                  learn, invest
                </Typography>{" "}
                and
                <Typography variant="JoinLearnPad" color="secondary">
                  {" "}
                  win
                </Typography>{" "}
                together.
              </Typography>
            </Box>
            <Box className={classes.GetStartedBtn}>
              <Button variant="custom">Get Started</Button>
            </Box>
          </Grid>
          <Grid item lg={5} md={12}>
            <Box mb="0px" mr="26.98px">
              <img
                className={classes.Svg}
                src={TransparentSvg}
                alt="Transparent"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JoinSection;
