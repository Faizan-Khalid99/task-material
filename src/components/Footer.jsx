import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Link,
  TextField,
  SvgIcon,
  InputAdornment,
  Stack,
  List,
  ListItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors, fontFamily } from "../Theme/theme";
import { ReactComponent as FooterLogo } from "../images/footerLogo.svg";
import TiktokIcon from "../images/tiktok-icon.png";
import FacebookIcon from "../images/facebook-icon.png";
import LinkedIcon from "../images/linkedin-icon.png";
import M_Icon from "../images/m.png";
import DiscordIcon from "../images/discord-icon.png";
import YtIcon from "../images/youtube-icon.png";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import InstagramIcon from "../images/instagram-icon.png";
import TwitterIcon from "../images/twitter-icon.png";
import TelegramIcon from "../images/telegram.png";
const footerStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#163D53",
    border: "0.1px solid #11302D",
    justifyContent: "space-around",
    height: "330px",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
    },
  },
  footerLogo: {
    width: "148.06px",
    height: "50px",
    paddingTop: "10px",
    marginTop: 10,
  },
  footerHeading: {
    color: colors.white,
    fontFamily: fontFamily.Oxygen,
    textTransform: "capitalize",
    fontWeight: 700,
    paddingBottom: "16px",
    textAlign: "left",
    "& p": {
      fontSize: "16px",
      lineHeight: "20.2px",
    },
  },
  footerSubHeading: {
    color: colors.white,
    fontFamily: fontFamily.Oxygen,
    textTransform: "capitalize",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
    opacity: 0.7,
    paddingTop: "12px",
  },
  footerGridStyle: {
    display: "flex",
    justifyContent: "space-around",
    paddingLeft: "0px",
    "&.MuiGrid-item": {
      root: {
        paddingLeft: "0px",
      },
    },
  },
  footerIcons: {
    maxWidth: "243px",
    height: "16px",
  },
  footerIconStyle: {
    display: "flex",
    alignItems: "center",
    marginRight: "50px",
  },
  footerLine: {
    marginTop: "36px",
    border: "1px solid #FFFFFF",
    opacity: 0.1,
  },
  footerBrand: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));
const Footer = () => {
  const classes = footerStyles();
  return (
    <Box className={classes.footer}>
      <Container fixed>
        <Grid container spacing={3} justifyContent="center">
          <Grid item lg={3} md={2} sm={12} xs={12}>
            <Box mt={10} className={classes.footerLogo}>
              <Link href="/">
                <FooterLogo />
              </Link>
            </Box>
          </Grid>
          <Grid mt={11} item lg={3} md={3} sm={6} xs={12}>
            <Box>
              <Typography variant="footerHeading">company</Typography>
              <Link href="/">
                <Typography className={classes.footerSubHeading}>
                  careers
                </Typography>
              </Link>
              <Link href="/">
                <Typography className={classes.footerSubHeading}>
                  About
                </Typography>
              </Link>
              <Link href="/">
                <Typography className={classes.footerSubHeading}>
                  private sales
                </Typography>
              </Link>
              <Link href="/">
                <Typography className={classes.footerSubHeading}>
                  submit your project
                </Typography>
              </Link>
            </Box>
          </Grid>

          <Grid mt={11} item lg={3} md={3} sm={6} xs={12}>
            <Box>
              <Typography variant="footerHeading">help</Typography>
              <Link href="/">
                <Typography className={classes.footerSubHeading}>
                  support
                </Typography>
              </Link>
              <Link href="/">
                <Typography className={classes.footerSubHeading}>
                  privacy policy
                </Typography>
              </Link>
              <Link>
                <Typography className={classes.footerSubHeading}>
                  cookie policy
                </Typography>
              </Link>
              <Link href="/">
                <Typography className={classes.footerSubHeading}>
                  lightpaper
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} mt={11} sm={12} xs={12}>
            <Box>
              <Typography variant="footerHeading">subscribe</Typography>
            </Box>
            <Box mt={2} width="234px">
              <TextField
                id="outlined-basic"
                label="Enter Email"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Arrow />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mr={3} mt={3} className={classes.footerIcons}>
              <List className={classes.footerIconStyle}>
                <ListItem>
                  <Link href="/">
                    <img src={TelegramIcon} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    <img src={TwitterIcon} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    <img src={M_Icon} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    {" "}
                    <img src={YtIcon} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    {" "}
                    <img src={DiscordIcon} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    {" "}
                    <img src={InstagramIcon} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    <img src={LinkedIcon} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    {" "}
                    <img src={FacebookIcon} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    {" "}
                    <img src={TiktokIcon} />
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.footerLine}></Box>
      <Box className={classes.footerBrand}>
        <Typography variant="footerBranding"> © GAINS Associates</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
