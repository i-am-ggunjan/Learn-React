import React from "react";

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
      {props.children}
    </>
  );
};

PassData2.defaultProps = {
  name: "No name passed",
  age: "No age passed",
};

export default PassData2;
