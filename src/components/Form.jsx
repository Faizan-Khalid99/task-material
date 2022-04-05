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
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { apiServiceWorker } from "../toolkit-store/apiServiceWorker";
import { addUser, removeUser } from "../toolkit-store/Features/UserSlice";

const Form = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.user.value);
  useEffect(() => {
    data = dispatch(apiServiceWorker());
    console.log(data);
  }, []);
  let nameInput;
  let emailInput;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Box data-aos="fade-up" data-aos-duration="1200" component="div" my={20}>
      <Container fixed maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
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
              inputRef={(node) => {
                nameInput = node;
              }}
            />{" "}
            <Input
              placeholder="Enter Email"
              color="secondary"
              onChange={(e) => setEmail(e.target.value)}
              mb={10}
              inputRef={(node) => {
                emailInput = node;
              }}
            />
            <Button
              sx={{ marginTop: "10px", marginLeft: " 10px" }}
              variant="contained"
              onClick={() => {
                if (name && email) {
                  dispatch(addUser({ name, email }));
                  setName("");
                  setEmail("");
                }
                nameInput.value = "";
                emailInput.value = "";
              }}
            >
              Add user
            </Button>
          </Grid>
          <Grid item lg={12} md={12} sm={6}>
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
