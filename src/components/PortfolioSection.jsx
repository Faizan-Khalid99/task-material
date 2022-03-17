import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as Trust } from "../images/trust1.svg";
import { ReactComponent as User } from "../images/user1.svg";
import { ReactComponent as CheckList } from "../images/check-list1.svg";
const useStyles = makeStyles({
  root: {
    marginTop: "100px",
  },
  PortfolioSection: {
    marginTop: "80px",
    marginLeft: "30px",
    "& .MuiGrid-container .MuiGrid-item": {
      paddingLeft: "30px",
    },
  },
  potfolioIcons: {
    marginBottom: "30px",
    boxShadow: 7,
  },
  captions: {
    marginTop: "10px",
  },
  grids: {
    borderLeft: "0.1px solid #E3E6EC",
    borderLeftWidth: "0.1px",
    padding: 0,
  },
});
const PortfolioSection = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.root}>
        <Typography variant="h2" color="secondary">
          Take your portfolio{" "}
          <Typography variant="h2" component="span">
            to the next level
          </Typography>
        </Typography>
        <Box>
          <Typography variant="h2">
            by educating yourself and others.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.PortfolioSection}>
        <Grid className={classes.gridItem} container spacing={3}>
          <Grid item md={4} xs={12} className={classes.grids}>
            <Trust className={classes.potfolioIcons} />
            <Typography variant="h3" color="secondary">
              Early
            </Typography>
            <Box className={classes.captions}>
              <Typography variant="p">
                Get in on highly vetted and exclusive projects before others.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} className={classes.grids}>
            <User className={classes.potfolioIcons} />
            <Typography variant="h3" color="secondary">
              Experts
            </Typography>
            <Box className={classes.captions}>
              <Typography variant="p">
                We have 4 years+ of experience in crypto, invested in 100+
                projects with up to 116x returns and interviewed hundreds of
                CEOs.{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} className={classes.grids}>
            <CheckList className={classes.potfolioIcons} />
            <Typography variant="h3" color="secondary">
              Compliant
            </Typography>
            <Box className={classes.captions}>
              <Typography variant="p">
                We work with best-in-class KYC providers to ensure compliance
                with local laws and prioritise your privacy at all times.{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PortfolioSection;
