import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
    marginTop: "50px",
  },
  trackRecordSection: {
    backgroundColor: "#E8EFF7",
    backgroundSize: "contain",
    height: "822px",
  },
  TrackRecordHeader: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },
  TrackTable: {
    display: "flex",
    width: "650px",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  StyledRow: {
    backgroundColor: "#e3ebf4",
  },
  StyledRow2: {
    backgroundColor: "#f4f7fb",
  },
});
const TrackRecord = () => {
  const classes = useStyles();
  return (
    <Box className={classes.trackRecordSection}>
      <Container>
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
        <Container>
          <Box className={classes.TrackTable}>
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow className={classes.StyledRow2}>
                    <TableCell>Project</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Current Price</TableCell>
                    <TableCell align="right">Change</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={classes.StyledRow}>
                    <TableCell component="th" scope="row">
                      <Mina />
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  <TableRow className={classes.StyledRow2}>
                    <TableCell component="th" scope="row">
                      <Flow />
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  <TableRow className={classes.StyledRow}>
                    <TableCell component="th" scope="row">
                      <Celo />
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  <TableRow className={classes.StyledRow2}>
                    <TableCell component="th" scope="row">
                      <Casper />
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"> </TableCell>
                  </TableRow>
                  <TableRow className={classes.StyledRow}>
                    <TableCell component="th" scope="row">
                      <Near />
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  <TableRow className={classes.StyledRow2}>
                    <TableCell component="th" scope="row">
                      <Solana />
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  <TableRow className={classes.StyledRow}>
                    <TableCell component="th" scope="row">
                      <Kadena />
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default TrackRecord;
