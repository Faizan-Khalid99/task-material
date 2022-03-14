import React from "react";
import { Button, Container, Typography, Box, Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { colors, fontFamily } from "../Theme/theme";
import { makeStyles } from "@mui/styles";
import { ReactComponent as Mina } from "../images/Mina.svg";
import { ReactComponent as Flow } from "../images/Flow.svg";
import { ReactComponent as Celo } from "../images/celo.svg";
import { ReactComponent as Casper } from "../images/casper.svg";
import { ReactComponent as Near } from "../images/near.svg";
import { ReactComponent as Solana } from "../images/solana.svg";
import { ReactComponent as Kadena } from "../images/kadena.svg";

const useStyles = makeStyles({
  heading: {
    fontSize: "56px",
    lineHeight: "112.27%",
    marginTop: "40px",
  },
  trackRecordSection: {
    backgroundColor: "#E8EFF7",
    backgroundSize: "contain",
    height: "790px",
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
  StyledRow: {
    backgroundColor: "#e3ebf4",
  },
  StyledRow2: {
    backgroundColor: "#f4f7fb",
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
});
const TrackRecord = () => {
  const classes = useStyles();
  return (
    <Box className={classes.trackRecordSection}>
      <Box className={classes.TrackRecordHeader}>
        <Box className={classes.heading}>
          <Typography variant="h1">
            Our{" "}
            <Typography variant="h1" color="secondary" component="span">
              Track Record
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box className={classes.TrackTable} mt={5}>
        <Container>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow className={classes.TableHeaderColor}>
                  <TableCell
                    sx={{
                      opacity: 0.7,
                      fontSize: "20px",
                      lineHeight: "150%",
                      fontWeight: 700,
                      paddingLeft: "36px",
                      colors: colors.swamp,
                    }}
                    align="left"
                  >
                    Project
                  </TableCell>
                  <TableCell
                    sx={{
                      paddingRight: "35px",
                      opacity: 0.7,
                      fontSize: "20px",
                      lineHeight: "36px",
                      fontWeight: "bold",
                      colors: colors.swamp,
                    }}
                    align="center"
                  >
                    Date
                  </TableCell>
                  <TableCell
                    sx={{
                      opacity: 0.7,
                      fontSize: "20px",
                      lineHeight: "36px",
                      fontWeight: "bold",
                      colors: colors.swamp,
                    }}
                    align="center"
                  >
                    Current Price
                  </TableCell>
                  <TableCell
                    sx={{
                      opacity: 0.7,
                      fontSize: "20px",
                      lineHeight: "36px",
                      fontWeight: "bold",
                      colors: colors.swamp,
                    }}
                    align="center"
                  >
                    Change
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.StyledRow}>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1}>
                      <Mina />
                      <Typography variant="body3">Mina</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell className={classes.tableDates} align="center">
                    <Typography> April 2021</Typography>
                  </TableCell>
                  <TableCell className={classes.prices} align="center">
                    <Typography variant="prices"> $1.67</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="profit">+332%</Typography>
                  </TableCell>
                </TableRow>
                <TableRow className={classes.StyledRow2}>
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Flow />
                      <Typography variant="body3" component="span">
                        Flow
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell className={classes.tableDates} align="center">
                    <Typography> Sept 2021</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="prices">$1.06</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="profit">+332%</Typography>
                  </TableCell>
                </TableRow>
                <TableRow className={classes.StyledRow}>
                  <TableCell align="center">
                    <Stack
                      className={classes.tableCellNames}
                      direction="row"
                      spacing={1}
                    >
                      <Celo />
                      <Typography variant="body3">Celo</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell className={classes.tableDates} align="center">
                    <Typography> May 2020</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="prices">$6.39</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="profit">+332%</Typography>
                  </TableCell>
                </TableRow>
                <TableRow className={classes.StyledRow2}>
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Casper />
                      <Typography variant="body3">Casper</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell className={classes.tableDates} align="center">
                    <Typography>May 2020</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="prices">$0.21</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="loss"> -67% </Typography>{" "}
                  </TableCell>
                </TableRow>
                <TableRow className={classes.StyledRow}>
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Near />
                      <Typography variant="body3">Near</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell className={classes.tableDates} align="center">
                    <Typography> Aug 2020</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="prices">$1.97</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="profit">+485%</Typography>
                  </TableCell>
                </TableRow>
                <TableRow className={classes.StyledRow2}>
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Solana />
                      <Typography variant="body3">Solana</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell className={classes.tableDates} align="center">
                    <Typography> Mar 2020</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="prices">$21.10</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="profit">+332%</Typography>
                  </TableCell>
                </TableRow>
                <TableRow className={classes.StyledRow}>
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Kadena />
                      <Typography variant="body3">Kadena</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell className={classes.tableDates} align="center">
                    <Typography>Nov 2019</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="prices">$0.36</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="loss">-46%</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
      <Box className={classes.ButtonPos}>
        <Button className={classes.ButtonStyle} variant="contained">
          View All projects
        </Button>
      </Box>
    </Box>
  );
};

export default TrackRecord;
