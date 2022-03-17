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
    width: "1080px",
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
      main: colors.loss,
    },
    common: {
      main: colors.swamp,
    }
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
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "1087px",
        },
      },
    },
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
            width: "179px",
            height: "48px",
            borderRadius: "78px",
            fontFamily: fontFamily.Oxygen,
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "20px",
            textAlign: "center",
            color: colors.white,
            textTransform: "capitalize",
            background: colors.shamRock,
            "&:hover": {
              background: colors.puertoRico,
            }
          },
        },
        {
          props: {
            variant: "slicktext",
          },
          style: {
            fontFamily: fontFamily.Oxygen,
            fontWeight: 700,
            fontSize: "32px",
            lineHeight:" 323.3%",
            /* or 103px */
            
            
            /* Shamrock */
            
            color: colors.shamRock,
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
          },
        },
        {
          props: {
            variant: "footerHeading",
          },
          style: {
            color: colors.white,
            fontFamily: fontFamily.Oxygen,
            textTransform: "capitalize",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "20.2px",
            paddingBottom: "25px",
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
        {
          props: {
            variant: "footerBranding",
          },
          style: {
            fontFamily: fontFamily.Oxygen,
            color: colors.white,
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "15.15px",
            opacity: "0.8",
          },
        },
        {
          props: {
            variant: "JoinLearnPad",
          },
          style: {
            fontFamily: fontFamily.Oxygen,
            color: colors.white,
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "35.95px",
          },
        },
        {
          props: {
            variant: "subHeader",
          },
          style: {
            fontFamily: fontFamily.Oxygen,
            color: colors.white,
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "112.27%",
            opacity: "0.9",
          },
        },
        {
          props: {
            variant: "para",
          },
          style: {
            fontFamily: fontFamily.Oxygen,
            color: colors.swamp,
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
          },
        },
        {
          props: {
            variant: "slicktext",
          },
          style: {
            fontFamily: fontFamily.Oxygen,
            color: colors.swamp,
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: "103.46px",
            padding: 0,
            margin: 0,
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
          width: "234px",
          height: "48px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: colors.white,
          border: "0.1px solid #2a4e62",
        },
        "&:hover": {
          border: "0.1px solid #2a4e62",
        },
        "&::after": {
          backgroundUrl: "../images/arrow.svg",
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
        {
          props: {
            variant: "dates",
          },
          style: {
            "& p": {
              color: "#415957",
              opacity: 0.7,
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "112.27%",
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          fontFamily: fontFamily.Oxygen,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.white,
          textDecoration: "none",
          fontFamily: fontFamily.Oxygen,
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "15px",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "&.MuiGrid-item": {
            paddingLeft: "10px",
            paddingTop: "15px",
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          "& .MuiListItem-root": {
            paddingRight: "12px",
            paddingLeft: "0px",
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& tr:nth-child(odd)": {
            backgroundColor: "#e3ebf4"
          },
          "& tr:nth-child(even)": {
            backgroundColor: "#f4f7fb"
          }
        }
      }
    }
  },
});
