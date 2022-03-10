import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../images/Menu.svg";
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
} from "@mui/material";
import GainsLogo from "../images/gains-logo.svg";
import { makeStyles } from "@mui/styles";

const ComponentStyle = makeStyles({
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

  const MobileMenu = () => {
    return (
      <Stack spacing={2}>
        <Button>1</Button>
        <Button>1</Button>
        <Button>1</Button>
      </Stack>
    );
  };

  const MobileView = () => {
    const [state, setState] = useState(false);
    const toggleDrawer = (open) => (event) => {
      setState(open);
    };
    return (
      <Box>
        <AppBar>
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
              <Typography variant="h5">The LearnPad</Typography>
              <Typography variant="h6">
                By GAINS
                <img src={GainsLogo} alt="logo" />
              </Typography>
            </Box>
            <Button variant="outlined">Signup</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  const DesktopView = () => {
    return (
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5">The LearnPad</Typography>
              <Typography variant="h6">
                By GAINS
                <img src={GainsLogo} alt="logo" />
              </Typography>
            </Box>
            <Box className={classes.root}>
              <Typography variant="h4">Tutorial videos</Typography>
              <Stack spacing={2} direction="row">
                <Button variant="outlined">Signup</Button>
                <Button variant="contained">Login</Button>
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  return <>{mobileView ? <MobileView /> : <DesktopView />}</>;
};

export default HeaderBar;
