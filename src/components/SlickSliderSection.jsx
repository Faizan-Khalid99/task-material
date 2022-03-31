import React, { useRef } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import UpArrow from "../images/UpArrow.png";
import { makeStyles } from "@mui/styles";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import Laptop from "../images/Laptop.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#EEF9F7",
    height: "618px",
    [theme.breakpoints.down("md")]: {
      height: "481px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "618px",
    },
  },
}));

const SlickSliderSection = () => {
  const classes = useStyles();
  const text = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    draggable: true,
    customPaging: function (i) {
      if (i === 0) {
        text.current = "Learn. ";
      }
      if (i === 1) {
        text.current = "Invest.";
      }
      if (i === 2) {
        text.current = "Live On.";
      }
      return (
        <div className="list-text">
          <Typography variant="slicktext" component="span">
            {text.current}
          </Typography>
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 900,
        settings: {
          vertical: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box className={classes.root}>
      <Container fixed>
        <Grid container>
          <Grid item md={12}>
            <Box >
              <Sliders className="slick-section" {...settings}>
                <Box mr={1}>
                  <Typography pb="13px" variant="h1" component = "h2">
                    Learn & Have Fun
                  </Typography>
                  <Typography variant="para" component = "p">
                    Our goal is to remove the barriers to investing. By taking
                    you through baby steps, we're making it more intuitive, fun
                    and easy to understand what the hell blockchain projects are
                    really doing.
                  </Typography>
                  <img className="laptop-img" src={Laptop} alt="" />
                </Box>
                <Box mr={1}>
                  <Typography pb="13px" variant="h1">
                    Invest & Profit
                  </Typography>
                  <Typography variant="para">
                    When we're sure you have understood a project well enough to
                    become an ambassador, you get to invest in it before it gets
                    listed on exchanges!
                  </Typography>
                  <img className="laptop-img" src={Laptop} alt="" />
                </Box>
                <Box mr={1}>
                  <Typography pb="13px" variant="h1">
                    Live On
                  </Typography>
                  <Typography variant="para">
                    You are highly encouraged to educate others about the
                    projects you discovered on the LearnPad.
                  </Typography>
                  <img className="laptop-img" src={Laptop} alt="" />
                </Box>
              </Sliders>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SlickSliderSection;
