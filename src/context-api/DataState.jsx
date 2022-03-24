import React, { useReducer, useEffect } from "react";
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

  useEffect(async () => {
    await getData();
  }, []);

  const showData = async () => {
    await getData();
  };

  const deleteMovie = async (title) => {
    dispatch({ type: "Delete_Movie", payload: title });
    console.log("i am being called, logic needs work");
  };

  return (
    <DataContext.Provider value={{ deleteMovie, showData, data: state.data }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
