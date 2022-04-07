import { makeStyles } from "@mui/styles";

export const HeroComponentStyles = makeStyles((theme) => ({
  gridStyle: {
    borderBottom: "0.1px solid #E3E6EC",
    paddingBottom: "20px",
    paddingLeft: "29px",
    paddingRight: "20px",
    paddingTop: "42.69px",
    borderBottomWidth: "0.1px",
    "& .MuiGrid-root .MuiGrid-item": {
      [theme.breakpoints.down("md")]: {
        // paddingLeft: "0px",
        paddingTop: "32px",
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 0,
      },
    },
  },
  intro: {
    marginTop: "50px",
  },
  introText: {
    paddingTop: "100px",
  },
  para: {
    fontWeight: 700,
  },
  subText: {
    marginTop: "20px",
  },
  getStarted: {
    paddingTop: "40px",
  },
  getStartedButton: {
    width: "179px",
    borderRadius: "78px",
    height: "48px",
  },
  HeroStyle: {
    maxWidth: "90%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "535px",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "335px",
      height: "auto",
      marginLeft: "-10px",
    },
  },
}));
