import React from "react";

const PassData1 = (props) => {
  console.log(props);
  return (
    <>
      PassData1 Component
      <br />
      {10 + 50}
      <br /> <br />
      {props.height}
      {/* ======= undefined ======== */}
      {props.und}
      <br />
      {/* ======= NaN ======== */}
      {props.na}
      <br />
      {/* ======= Null ======== */}
      {props.null}
      <br />
      {/* ======= String ======== */}
      {props.name}
      <br />
      {/* ======= Number ======== */}
      {props.age}
      <br />
      {/* ======= Array ======== */}
      {props.arr[3]}
      <br />
      {props.arr[4]}
      <br />
      <br />
      {props.arr.map((value) => {
        return <li key={Math.random()}>{value}</li>;
      })}
      <br />
      {/* =======Object======== */}
      {props.obj.age}
      <br />
      {props.obj.gender}
      <br />
      {/* ======= Function ======== */}
      {props.greet(props.name)}
      <br />
      {console.log(props.language(props.name))}
    </>
  );
};

export default PassData1;
