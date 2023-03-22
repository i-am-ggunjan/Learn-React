import React from "react";
import { DataStore } from "../api/Store";

const C1 = () => {
  return (
    <>
      <h1>C1 Component</h1>

      <DataStore.Consumer>
        {
            value => {
                return (
                    <>
                    <h2>Name : {value.name}</h2>
                    <h2>Age : {value.age}</h2>
                    </>
                )
            }
        }
      </DataStore.Consumer>
    </>
  );
};

export default C1;
