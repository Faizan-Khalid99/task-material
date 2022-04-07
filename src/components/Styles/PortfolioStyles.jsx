import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
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

    [theme.breakpoints.down("md")]: {
      borderLeft: 0,
      paddingBottom: "25px",
      paddingTop: "32px",
      borderBottom: "0.1px solid #E3E6EC",
      borderBottomWidth: "0.1px",
      paddingLeft: 0,
    },
    [theme.breakpoints.up("md")]: {
      "& span": {
        "& br": {
          display: "none",
        },
      },
    },
  },
}));
