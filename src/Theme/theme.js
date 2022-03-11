import { createTheme, Grid } from "@mui/material";
import "../Fonts/Oxygen-Regular.ttf";
import "../Fonts/Oxygen-Bold.ttf";
const colors = {
  aliceBlue: "#ECF0F3",
  hawkersBlue: "#C6D7EB",
  rockBlue: "##8CA2B7",
  slateGrey: "#6B8299",
  Solitude: "#E3E6EC",
  puertoRico: "#3EB8AA",
  shamRock: "#22DBB5",
  brightTurqoise: "#09F9BF",
  swamp: "#11302D",
  white: "#FFFFFF",
  darkSlate: "#415957",
};

const fontFamily = {
  Oxygen: "Oxygen-Regular sans-serif",
  OxygenBold: "Oxygen-Bold sans-serif",
};

export const globalTheme = createTheme({
  container: {
    maxWidth: "1366px",
  },
  shadows: "none",
  palette: {
    primary: {
      main: colors.white,
    },
    secondary: {
      main: colors.shamRock,
    },
    background: {
      main: colors.white,
    },

  },
  typography: {
    fontFamily: fontFamily,
    h1: {
      fontSize: "3rem",
      fontWeight: "bolder",
      color: colors.swamp,
      fontFamily: fontFamily.OxygenBold,
    },
    h4: {
      fontSize: "15px",
      color: colors.swamp,
      marginRight: "15px",
      margin: "auto",
      fontWeight: " 700 bolder",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: colors.swamp,
    },
    h6: {
      fontSize: "15px",
      color: colors.swamp,
    },
    p: {
      fontSize: "1rem",
      color: colors.swamp,
    },
    body1: {
      fontSize: "1rem",
      color: colors.swamp,
    }


  },
  // Name of the component
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        contained: {
          // Some CSS
          background: colors.swamp,
          color: colors.white,
          borderRadius: "78px",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            background: colors.swamp,
            color: colors.white,
          },
        },
        outlined: {
          color: colors.swamp,
          border: `1.5px solid ${colors.swamp}`,
          borderRadius: "78px",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            border: `2px solid ${colors.swamp}`,
            borderRadius: "78px",
            color: colors.swamp,
          },
        },
        text: {
          color: colors.swamp,
          fontFamily: fontFamily.Oxygen,
          textTransform: "none",
          fontWeight: "bold",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: ` 0.1px solid ${colors.Solitude}`,
          borderBottomWidth: "0.1px",
          marginY: "5px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        marginRight: "auto",
        marginLeft: "auto",
        paper: {
          background: colors.white,
          width: "300px",
        },
      },
    },
  },
});
