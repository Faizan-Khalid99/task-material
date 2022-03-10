import { createTheme, Grid } from "@mui/material";
import "../Fonts/Oxygen-Regular.ttf";
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
  Oxygen: "Oxygen-Regular",
};

export const globalTheme = createTheme({
  shadows: "none",
  palette: {
    primary: {
      main: colors.white,
    },
    secondary: {
      main: colors.puertoRico,
    },
    background: {
      main: colors.white,
    },
  },
  typography: {
    fontFamily: fontFamily.Oxygen,
    h4: {
      fontSize: "15px",
      color: colors.swamp,
      marginRight: "15px",
      margin: "auto",
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
          textTransform: "none",
          fontFamily: fontFamily.Oxygen,
          "&:hover": {
            background: colors.swamp,
            color: colors.white,
          },
        },
        outlined: {
          color: colors.swamp,
          border: `1px solid ${colors.swamp}`,
          borderRadius: "78px",
          textTransform: "none",
          fontFamily: fontFamily.Oxygen,
          "&:hover": {
            border: `1px solid ${colors.swamp}`,
            borderRadius: "78px",
            color: colors.swamp,
          },
        },
        text: {
          color: colors.swamp,
          fontFamily: fontFamily.Oxygen,
        }
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: `0.2px solid ${colors.darkSlate}`,
          marginY: "5px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: colors.white,
          width: "300px"
        },
      },
    }
  },
});
