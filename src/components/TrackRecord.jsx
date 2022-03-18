import React, { useContext, useRef } from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { colors, fontFamily } from "../Theme/theme";
import { makeStyles } from "@mui/styles";

//import Mina from "../images/Mina.svg";
// import Flow from "../images/Flow.svg";
// import Celo from "../images/celo.svg";
// import Casper from "../images/casper.svg";
// import Near from "../images/near.svg";
// import Solana from "../images/solana.svg";
// import Kadena from "../images/kadena.svg";
import DataContext from "./DataContext";
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
  const { data, showData } = useContext(DataContext);
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
                    align="center"
                  >
                    Title
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
                    Release Date
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
                    Director
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
                    Episode
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map(({ episode_id, title, release_date, director }) => (
                  <TableRow key={episode_id}>
                    <TableCell align="center">
                      <Typography variant="body3">{title}</Typography>
                    </TableCell>
                    <TableCell className={classes.tableDates} align="center">
                      <Typography> {release_date} </Typography>
                    </TableCell>
                    <TableCell className={classes.prices} align="center">
                      <Typography variant="prices"> {director}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="profit">{episode_id}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
      <Box className={classes.ButtonPos}>
        <Button
          onClick={showData}
          className={classes.ButtonStyle}
          variant="contained"
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default TrackRecord;
