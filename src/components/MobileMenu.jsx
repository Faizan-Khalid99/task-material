import React from "react";
import { Stack, Typography } from "@mui/material";
import GainsLogo from "../images/gains-mobile.svg";
import { makeStyles } from "@mui/styles";
const style = makeStyles({
  root: {
    height: "55.999847412109375px",
    width: "175.91090393066406px",
    borderRadius: "0px",
  },
});

const MobileMenu = () => {
  const classes = style();
  return (
    <Stack spacing={2} direction="column">
      <img src={GainsLogo} alt="" className={classes.root} />
    </Stack>
  );
};

export default MobileMenu;
