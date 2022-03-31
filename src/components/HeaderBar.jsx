import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../images/Menu.svg";
import { ReactComponent as HeaderLogo } from "../images/header-logo.svg";
import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  Button,
  Stack,
  SvgIcon,
  Drawer,
  IconButton,
  Container,
  Link,
} from "@mui/material";
import GainsLogo from "../images/gains-logo.svg";
import { makeStyles } from "@mui/styles";
import MobileMenu from "./MobileMenu";
const ComponentStyle = makeStyles({
  headerLogoStyle: {
    height: "38.0004768371582px",
    width: "112.52877807617188px",
    borderRadius: "0px",
    marginRight: "28px",
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  img: {
    marginTop: "auto",
  },
  mobile: {
    justifyContent: "flex-end",
  },
  Button: {
    width: "64px",
    height: "32px",
  },
  tutorialStyle: {
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "15px",
  },
  mobileMenu: {
    marginRight: "19px",
  },
});

const HeaderBar = () => {
  const classes = ComponentStyle();
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const MobileView = () => {
    const [state, setState] = useState(false);
    const toggleDrawer = (open) => (event) => {
      setState(open);
    };
    return (
      <Box>
        <AppBar color="transparent" position="fixed">
          <Container fixed maxWidth="lg">
            <Toolbar>
              <Box mr={2.5}>
                <IconButton onClick={toggleDrawer(true)}>
                  <SvgIcon>
                    <Logo />
                  </SvgIcon>
                </IconButton>
              </Box>
              <Drawer open={state} onClose={toggleDrawer(false)}>
                <MobileMenu />
              </Drawer>
              <Box
                sx={{ flexGrow: 1, marginRight: 2.5 }}
                className={classes.headerLogoStyle}
              >
                <Link href="/">
                  <HeaderLogo />
                </Link>
              </Box>
              <Box>
                <Button variant="outlined">Signup</Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    );
  };

  const DesktopView = () => {
    return (
      <Box>
        <AppBar color="transparent" position="fixed">
          <Container fixed>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }} className={classes.headerLogoStyle}>
                <Link href="/">
                  <HeaderLogo />
                </Link>
              </Box>
              <Box className={classes.root}>
                <Button variant="text">
                  <Box>
                    <Typography className={classes.tutorialStyle} variant="h4">
                      Tutorial Videos
                    </Typography>
                  </Box>
                </Button>
                <Stack spacing={1} direction="row">
                  <Button className={classes.Button} variant="outlined">
                    Signup
                  </Button>
                  <Button className={classes.Button} variant="contained">
                    Login
                  </Button>
                </Stack>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    );
  };

  return <>{mobileView ? <MobileView /> : <DesktopView />}</>;
};

export default HeaderBar;
