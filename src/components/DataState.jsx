import React, { useEffect, useState, useReducer } from "react";
import DataContext from "./DataContext";
import Reducer from "./reducer";

const DataState = (props) => {
  const initialState = {
    data: [],
  };
  const getData = async () => {
    const response = await fetch(`https://swapi.dev/api/films`);
    const res = await response.json();
    if (response) {
      dispatch({ type: "Show_Movies", payload: res.results });
    } else {
      console.log("Not working!");
    }
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const showData = async () => {
    await getData();
  };

  return (
    <DataContext.Provider value={{ showData, data: state.data }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
