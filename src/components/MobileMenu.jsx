import React from "react";
import { Stack, Typography, Box, Link, Button } from "@mui/material";
import GainsLogo from "../images/gains-mobile.svg";
import { makeStyles } from "@mui/styles";
const style = makeStyles({
  root: {
    height: "55.999847412109375px",
    width: "175.91090393066406px",
    borderRadius: "0px",
    marginTop: "48px",
    marginLeft: "32px",
  },
  borderClass: {
    borderBottom: "0.1px solid rgba(17, 48, 45, 0.2)",
    paddingBottom: "24px",
  },
});

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
        <Link  href="/">
          <Button mb = "24px" variant="outlined" size="large">
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
