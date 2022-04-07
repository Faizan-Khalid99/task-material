import { makeStyles } from "@mui/styles";
import { colors } from "../../Theme/theme";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: colors.swamp,
    boxShadow: "0px 7px 41px rgba(17, 48, 45, 0.04)",
    borderRadius: "15px",
    height: "302px",
    marginTop: "80px",
    marginBottom: "80px",
    marginLeft: "140px",
    marginRight: "140px",
    [theme.breakpoints.down("lg")]: {
      height: "530px",
      width: "680px !important",
    },
    [theme.breakpoints.down("md")]: {
      height: "600px",
      width: "500px !important",
    },
    [theme.breakpoints.down("sm")]: {
      height: "650px",
      width: "335px !important",
    },
  },
  Svg: {
    width: "410.82px",
    height: "284.79px",
    marginLeft: "50px",
    marginTop: "15px",
    [theme.breakpoints.down("lg")]: {
      marginTop: "16px",
    },
    [theme.breakpoints.down("md")]: {
      width: "302.87px",
      height: "209.96px",
      marginTop: "133px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250.87px",
      height: "209.96px",
      marginTop: "147px",
      marginLeft: "0px",
    },
  },
  subHeading: {
    marginLeft: "56px",
    marginTop: "56px",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "16px",
      marginTop: "32px",
    },
  },
  Joining: {
    marginLeft: "56px",
    marginTop: "12px",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "16px",
      marginTop: "4px",
    },
  },
  GetStartedBtn: {
    marginTop: "54px",
    marginLeft: "56px",
    marginBottom: "70px",
    [theme.breakpoints.down("lg")]: {
      marginTop: "24px",
      marginLeft: "16px",
      marginBottom: "32px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "16px",
      marginTop: "50px",
    },
  },
}));
