import React, { useEffect, useState } from "react";

const Hook2 = (props) => {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("Gaurav");

  useEffect(() => {
    console.log("Use Effect (behave like componentDidMount)");
  }, []);

  useEffect(() => {
    console.log("Use Effect (behave like componentWillUpdate case-1)");
  });

  useEffect(() => {
    console.log("Use Effect (behave like componentWillUpdate Case-2)");
  }, [name]);

  let handleCount = () => {
    return setCount(count + 1);
  };

  return (
    <>
      <section className="text-center">
        <h1>Name : {name}</h1>
        <h1>Gender : {props.gender}</h1>
        <h1>{count}</h1>

        <button
          className="bg-teal-800 hover:bg-teal-600 text-white text-xs px-3 py-1 rounded-full"
          onClick={handleCount}
        >
          Update Count
        </button>
      </section>
    </>
  );
};

export default Hook2;
