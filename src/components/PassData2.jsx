import React from "react";
import Types from "prop-types";

const PassData2 = (props) => {
  console.log(props);
  console.log(props.children);
  return (
    <>
      PassData2 Component
      <br />
      {props.name}
      <br />
      {props.age}
      <br />
      {props.sex}
      <br />
      {props.children}
    </>
  );
};

PassData2.defaultProps = {
//   name: "No name passed",
  age: 10,
  sex: "No sex passed",
};

PassData2.propTypes = {
    age: Types.number.isRequired,
    // Here we don't get warning even we not pass data, because we get it from defaultProps
    sex : Types.string,
    name: Types.string.isRequired,
    // Here we get warning even because we not pass data as well as we don.t get it from defaultProps
  };

export default PassData2;
