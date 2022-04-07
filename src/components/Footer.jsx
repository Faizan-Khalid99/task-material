import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Link,
  TextField,
  InputAdornment,
  List,
  ListItem,
} from "@mui/material";
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
import { footerStyles } from "./Styles/footerStyles";
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
                    <img src={TelegramIcon} alt="Telegram" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    <img src={TwitterIcon} alt="Twitter" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    <img src={M_Icon} alt="M" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    {" "}
                    <img src={YtIcon} alt="Youtube" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    {" "}
                    <img src={DiscordIcon} alt="Discord" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    {" "}
                    <img src={InstagramIcon} alt="Instagram" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    <img src={LinkedIcon} alt="LinkedIn" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    {" "}
                    <img src={FacebookIcon} alt="Facebook" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/">
                    {" "}
                    <img src={TiktokIcon} alt="Tiktok" />
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
