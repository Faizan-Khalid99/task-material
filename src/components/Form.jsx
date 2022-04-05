import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Input,
  Box,
  IconButton,
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

  return (
    <Box component="div" my={10}>
      <Container fixed maxWidth="md">
        <Input placeholder="Enter Name" color="error" /> <br /> <br />
        <Input placeholder="Enter Email" color="warning" />
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
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Box>
  );
};

export default Form;
