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
      {/* {props.children[2]}
      {props.children[1]}
      {props.children[0]} */}
    </>
  );
};

export default PassData2;
