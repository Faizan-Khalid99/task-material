import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Link,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors, fontFamily } from "../Theme/theme";
import { ReactComponent as FooterLogo } from "../images/footerLogo.svg";

const footerStyles = makeStyles({
  footer: {
    backgroundColor: "#163D53",
    border: "0.1px solid #11302D",
  },
  footerLogo: {
    width: "148.06px",
    height: "50px",
    paddingTop: "10px",
  },
  footerHeading: {
    color: colors.white,
    fontFamily: fontFamily.Oxygen,
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "20.2px",
    textAlign: "left",
  },
  footerSubHeading: {
    color: colors.white,
    fontFamily: fontFamily.Oxygen,
    textTransform: "capitalize",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
    opacity: "0.8",
  },
  GridStyleFooter: {
    marginRight: "50px",
    display: "flex",
  },
});
const Footer = () => {
  const classes = footerStyles();
  return (
    <Box className={classes.footer}>
      <Container>
        <Grid
          container
          pt={3}
          pl={3}
          spacing={5}
          className={classes.GridStyleFooter}
        >
          <Grid item xs={2}>
            <Box ml={5} mt={5} className={classes.footerLogo}>
              <Link href="/">
                <FooterLogo />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box ml={5} mt={5}>
              <Button variant="string">
                <Typography size="small" className={classes.footerHeading}>
                  company
                </Typography>
              </Button>
              <Button variant="string">
                <Typography className={classes.footerSubHeading}>
                  careers
                </Typography>
              </Button>
              <Button variant="string">
                <Typography className={classes.footerSubHeading}>
                  About
                </Typography>
              </Button>
              <Button variant="custom">
                <Typography className={classes.footerSubHeading}>
                  private sales
                </Typography>
              </Button>
              <Button variant="custom2">
                <Typography className={classes.footerSubHeading}>
                  submit your project
                </Typography>
              </Button>
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box ml={5} mt={5}>
              <Button variant="string">
                <Typography size="small" className={classes.footerHeading}>
                  help
                </Typography>
              </Button>
              <Button variant="string">
                <Typography className={classes.footerSubHeading}>
                  support
                </Typography>
              </Button>
              <Button variant="custom3">
                <Typography className={classes.footerSubHeading}>
                  privacy policy
                </Typography>
              </Button>
              <Button variant="custom4">
                <Typography className={classes.footerSubHeading}>
                  cookie policy
                </Typography>
              </Button>
              <Button variant="custom5">
                <Typography className={classes.footerSubHeading}>
                  lightpaper
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box ml={5} mt={5}>
              <Button variant="string">
                <Typography size="small" className={classes.footerHeading}>
                  subscribe
                </Typography>
              </Button>
              <TextField
                id="outlined-basic"
                label="Enter Email"
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
