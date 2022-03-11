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
        <Container>
          <AppBar position="relative">
            <Toolbar>
              <IconButton onClick={toggleDrawer(true)}>
                <SvgIcon>
                  <Logo />
                </SvgIcon>
              </IconButton>
              <Drawer open={state} onClose={toggleDrawer(false)}>
                <MobileMenu />
              </Drawer>
              <Box sx={{ flexGrow: 1 }}>
                <Link href="/">
                  <Box sx={{ flexGrow: 1 }}>
                    <HeaderLogo />
                  </Box>
                </Link>
              </Box>
              <Button variant="outlined">Signup</Button>
            </Toolbar>
          </AppBar>
        </Container>
      </Box>
    );
  };

  const DesktopView = () => {
    return (
      <Box>
        <AppBar position="relative">
          <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link href="/">
                <Box sx={{ flexGrow: 1 }}>
                  <HeaderLogo />
                </Box>
              </Link>
            </Box>
            <Box className={classes.root}>
              <Button variant="text">
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h4">Tutorial Videos</Typography>
                </Box>
              </Button>
              <Stack spacing={2} direction="row">
                <Button variant="outlined">Signup</Button>
                <Button variant="contained">Login</Button>
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
