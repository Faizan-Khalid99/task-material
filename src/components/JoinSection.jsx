import React from "react";
import { Button, Box, Grid, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors } from "../Theme/theme";
import TransparentSvg from "../images/Transparent.svg";
const useStyles = makeStyles({
  root: {
    background: colors.swamp,
    boxShadow: "0px 7px 41px rgba(17, 48, 45, 0.04)",
    borderRadius: "15px",
    height: "302px",
    marginTop: "80px",
    marginBottom: "80px",
    marginLeft: "140px",
    marginRight: "140px",
  },
  Svg: {
    width: "410.82px",
    height: "284.79px",
  },
});

const JoinSection = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container className={classes.root}>
        <Grid container>
          <Grid item xs={7}>
            <Box ml="56px" mt="56px">
              <Typography variant="subHeader">
                Behind every successful project is a successful community.{" "}
              </Typography>
            </Box>
            <Box mt="12px" ml="56px">
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
            <Box mt="54px" ml="56px" mb="70px">
              <Button variant="custom">Get Started</Button>
            </Box>
          </Grid>
          <Grid item xs={5}  >
            <Box mb="0px" mr="26.98px">
              <img
                className={classes.Svg}
                src={TransparentSvg}
                alt="cool image"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JoinSection;
