import { colors, fontFamily } from "../../Theme/theme";
import { makeStyles } from "@mui/styles";

// import DataContext from "../context-api/DataContext";
export const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "56px",
    lineHeight: "112.27%",
    marginTop: "40px",
  },
  trackRecordSection: {
    backgroundColor: "#E8EFF7",
    backgroundSize: "contain",
    height: "790px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      paddingBottom: "30px",
    },
  },
  TrackRecordHeader: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },
  TableHeader: {
    fontWeight: "bold",
    opacity: "80%",
    fontSize: "24px",
    lineHeight: "36px",
    paddingLeft: "30px",
    color: colors.swamp,
  },
  TableHeaderColor: {
    backgroundColor: colors.white,
  },
  TrackTable: {
    display: "flex",
    justifyContent: "center",
  },

  tableColumn: {
    display: "flex",
    justifyContent: "center",
  },
  tableDates: {
    "& p": {
      color: "#415957",
      opacity: 0.7,
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: "112.27%",
    },
  },
  prices: {
    fontWeight: "bold",
    color: colors.swamp,
    fontSize: "30px",
    lineHeight: "112.27%",
    fontFamily: fontFamily.Oxygen,
  },
  ButtonPos: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  ButtonStyle: {
    width: "220px",
    height: "48px",
  },
}));
