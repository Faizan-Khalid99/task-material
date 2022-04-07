import { makeStyles } from "@mui/styles";
import { colors, fontFamily } from "../../Theme/theme";

export const footerStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#163D53",
    border: "0.1px solid #11302D",
    justifyContent: "space-around",
    height: "330px",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
    },
  },
  footerLogo: {
    width: "148.06px",
    height: "50px",
    paddingTop: "10px",
    marginTop: 10,
  },
  footerHeading: {
    color: colors.white,
    fontFamily: fontFamily.Oxygen,
    textTransform: "capitalize",
    fontWeight: 700,
    paddingBottom: "16px",
    textAlign: "left",
    "& p": {
      fontSize: "16px",
      lineHeight: "20.2px",
    },
  },
  footerSubHeading: {
    color: colors.white,
    fontFamily: fontFamily.Oxygen,
    textTransform: "capitalize",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
    opacity: 0.7,
    paddingTop: "12px",
  },
  footerGridStyle: {
    display: "flex",
    justifyContent: "space-around",
    paddingLeft: "0px",
    "&.MuiGrid-item": {
      root: {
        paddingLeft: "0px",
      },
    },
  },
  footerIcons: {
    maxWidth: "243px",
    height: "16px",
  },
  footerIconStyle: {
    display: "flex",
    alignItems: "center",
    marginRight: "50px",
  },
  footerLine: {
    marginTop: "36px",
    border: "1px solid #FFFFFF",
    opacity: 0.1,
  },
  footerBrand: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));
