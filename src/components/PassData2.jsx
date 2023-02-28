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
      {/* Here we will get warning, because we passed data as string but the required data should be number type */}
      <br />
      {props.sex}
      <br />
      {props.children}
    </>
  );
};

PassData2.defaultProps = {
  name: "No name passed",
  age: 10,
  sex: "No sex passed",
};

PassData2.propTypes = {
    name: Types.string,
    age: Types.number,
    sex : Types.string
  };

export default PassData2;
