import { createTheme, Grid } from "@mui/material";
import "../Fonts/Oxygen-Regular.ttf";
import "../Fonts/Oxygen-Bold.ttf";
export const colors = {
  aliceBlue: "#ECF0F3",
  hawkersBlue: "#C6D7EB",
  rockBlue: "#8CA2B7",
  slateGrey: "#6B8299",
  Solitude: "#E3E6EC",
  puertoRico: "#3EB8AA",
  shamRock: "#22DBB5",
  brightTurqoise: "#09F9BF",
  swamp: "#11302D",
  white: "#FFFFFF",
  darkSlate: "#415957",
  loss: "#EC4949 ",
};

export const fontFamily = {
  Oxygen: "Oxygen",
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
    loss: {
      main: colors.puertoRico,
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: colors.swamp,
      fontFamily: fontFamily.Oxygen,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: colors.swamp,
      lineHeight: "35.93px",
      fontFamily: fontFamily.Oxygen,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: colors.swamp,
      lineHeight: "26.94px",
      fontFamily: fontFamily.Oxygen,
    },
    h4: {
      fontSize: "15px",
      color: colors.swamp,
      marginRight: "15px",
      margin: "auto",
      fontWeight: " 700 bolder",
      fontFamily: fontFamily.Oxygen,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: colors.swamp,
      fontFamily: fontFamily.Oxygen,
    },
    h6: {
      fontSize: "15px",
      color: colors.swamp,
      fontFamily: fontFamily.Oxygen,
    },
    p: {
      fontSize: "16px",
      color: colors.swamp,
      lineHeight: "24px",
      opacity: "0.8",
      fontFamily: fontFamily.Oxygen,
    },
    body1: {
      fontFamily: fontFamily.Oxygen,
      color: colors.white,
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        contained: {
          // Some CSS
          background: colors.swamp,
          fontFamily: fontFamily.Oxygen,
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
          fontFamily: fontFamily.Oxygen,
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
        string: {
          color: colors.white,
          fontFamily: fontFamily.Oxygen,
          textTransform: "company",
          fontWeight: 700,
          textAlign: "left",
        },
      },
      variants: [
        {
          props: {
            variant: "custom",
          },
          style: {
            width: "130px",
            paddingLeft: "-5px",
          },
        },
        {
          props: {
            variant: "custom2",
          },
          style: {
            width: "180px",
            paddingLeft: "-5px",
          },
        },
        {
          props: {
            variant: "custom3",
          },
          style: {
            width: "180px",
            marginLeft: "-22px",
          },
        },
        {
          props: {
            variant: "custom4",
          },
          style: {
            width: "180px",
            marginLeft: "-24px",
          },
        },
        {
          props: {
            variant: "custom5",
          },
          style: {
            width: "150px",
            marginLeft: "-18px",
          },
        },
      ],
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
    MuiTable: {
      styleOverrides: {
        root: {
          borderTopRadius: "10px 10px 0px 0px",
          paddingLeft: "50px",
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body3",
          },
          style: {
            fontWeight: 400,
            fontSize: "19px",
            lineHeight: "112.27%",
            paddingTop: "5px",
            paddingLeft: "3px",
            color: colors.swamp,
            opacity: 0.8,
          },
        },
        {
          props: {
            variant: "loss",
          },
          style: {
            color: colors.loss,
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "112.27%",
          },
        },
        {
          props: {
            variant: "profit",
          },
          style: {
            color: colors.puertoRico,
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "112.27%",
          },
        },
        {
          props: {
            variant: "prices",
          },
          style: {
            color: colors.swamp,
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "112.27%",
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily.Oxygen,
          color: colors.white,
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          opacity: 0.8,
          border: '0.1px solid #2a4e62',
          width: '250px'
        },
        '$.hover': {
          border: '0.1px solid #2a4e62',
        },
      },
    },
    MuiTableCell: {
      variants: [
        {
          props: {
            variant: "head",
          },
          style: {
            opacity: "80%",
            fontSize: "24px",
            lineHeight: "36px",
            fontWeight: "bold",
            paddingLeft: "30px",
          },
        },
      ],
      styleOverrides: {
        root: {
          fontFamily: fontFamily.Oxygen,
        },
      },
    },
  },
});
