import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "#EEF9F7",
    height: "618px",
    [theme.breakpoints.down("md")]: {
      height: "481px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "618px",
    },
  },
}));
