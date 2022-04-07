import React from "react";
import { Stack, Typography, Box, Link, Button } from "@mui/material";
import GainsLogo from "../images/gains-mobile.svg";
import { style } from "./Styles/style";
const MobileMenu = () => {
  const classes = style();
  return (
    <>
      <Box className={classes.borderClass}>
        <Stack spacing={2} direction="column">
          <img src={GainsLogo} alt="" className={classes.root} />
        </Stack>
      </Box>
      <Box mt="24px" ml="21px">
        <Link href="/">
          <Typography variant="body2">Tutorial Videos</Typography>
        </Link>
      </Box>
      <Box mt="24px" ml="21px">
        <Link href="/">
          <Button mb="24px" variant="outlined" size="large">
            signup
          </Button>
        </Link>
      </Box>
      <Box mt="24px" ml="21px">
        <Link href="/">
          <Button variant="contained" size="large">
            login
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default MobileMenu;
