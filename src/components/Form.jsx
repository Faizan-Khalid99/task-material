import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Input,
  Box,
  Button,
  Grid,
  useMediaQuery,
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Box data-aos="fade-up" data-aos-duration="1200" component="div" my={20}>
      <Container fixed maxWidth="md">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={6}>
            <Input
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              color="warning"
              mb={10}
            />{" "}
            <Input
              placeholder="Enter Email"
              color="success"
              onChange={(e) => setEmail(e.target.value)}
              mb={10}
            />
            <Button
              sx={{ marginTop: "10px", marginLeft: " 10px" }}
              variant="contained"
              onClick={() => dispatch(addUser({ name, email }))}
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
