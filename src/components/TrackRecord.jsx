import React from "react";
import { Button, Container, Typography, Box, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { colors } from "../Theme/theme";
import DeleteIcon from "@mui/icons-material/Delete";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { ActionCreators } from "../store/actions";
import { useStyles } from "./Styles/TrackRecordStyles";

const TrackRecord = () => {
  const classes = useStyles();
  // const { data, showData, deleteMovie } = useContext(DataContext);
  const dispatch = useDispatch();
  const { fetchData, deleteMovie } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  const movies = useSelector((movies) => movies);
  // console.log(movies.movies.data);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="1200"
      className={classes.trackRecordSection}
    >
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
        <Container fixed>
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
                {movies?.movies?.data?.map(
                  ({ episode_id, title, release_date, director }, index) => (
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
                        <Typography variant="profit">
                          {episode_id}
                          <IconButton onClick={() => deleteMovie(index)}>
                            <DeleteIcon />
                          </IconButton>
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
      <Box className={classes.ButtonPos}>
        <Button
          onClick={() => fetchData()}
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
