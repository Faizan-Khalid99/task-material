import React, { useEffect, useState, useRef } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Input,
  Box,
  Button,
  Grid,
  Typography,
  createTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { apiServiceWorker } from "../toolkit-store/apiServiceWorker";
import {
  addUser,
  removeUser,
  updateUsername,
} from "../toolkit-store/Features/UserSlice";

const Form = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.user.value);
  const theme = createTheme();
  useEffect(() => {
    data = dispatch(apiServiceWorker());
    console.log(data);
  }, []);

  const nameInput = useRef();
  const emailInput = useRef();
  const updateNameInput = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newUserName, setNewUserName] = useState("");

  return (
    <Box data-aos="fade-up" data-aos-duration="1200" component="div" my={20}>
      <Container fixed maxWidth="lg">
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
            [theme.breakpoints.down("md")]: {
              display: "block",
            },
          }}
        >
          <Typography variant="h1" component="h4" color="secondary">
            Users
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid
            item
            lg={12}
            md={12}
            sm={6}
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Input
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              color="secondary"
              mb={10}
              inputRef={nameInput}
            />{" "}
            <Input
              placeholder="Enter Email"
              color="secondary"
              onChange={(e) => setEmail(e.target.value)}
              mb={10}
              inputRef={emailInput}
            />
            <Button
              sx={{ marginTop: "10px", marginLeft: " 10px" }}
              variant="contained"
              size="large"
              onClick={() => {
                if (name && email) {
                  dispatch(addUser({ name, email }));
                  setName("");
                  setEmail("");
                  nameInput.current.value = "";
                  emailInput.current.value = "";
                }
              }}
            >
              Add user
            </Button>
          </Grid>
          <Grid item lg={12} md={6} sm={6}>
            <List>
              {data.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemText
                      primary={item.name}
                      secondary={item.email}
                      primaryTypographyProps={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                    />
                    <Input
                      placeholder="Update UserName"
                      color="secondary"
                      sx={{ marginRight: "10px" }}
                      onChange={(e) => {
                        setNewUserName(e.target.value);
                      }}
                      inputRef={updateNameInput}
                    />

                    <Button
                      variant="contained"
                      onClick={() => {
                        if (newUserName) {
                          dispatch(updateUsername({ newUserName, index }));
                          setNewUserName("");
                          updateNameInput.current.value = "";
                        }
                      }}
                    >
                      Update Username
                    </Button>

                    <Button
                      sx={{ marginLeft: "10px" }}
                      variant="contained"
                      onClick={() => dispatch(removeUser(index))}
                    >
                      Delete User
                    </Button>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Form;
