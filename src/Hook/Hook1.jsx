import React, { useState } from "react";

const Hook1 = () => {
  let [count, setCount] = useState(0);

  let handleIncrement = () => {
    setCount(count + 1);
  };
  let handleReset = () => {
    setCount(0);
  };
  let handleDecrement = () => {
    setCount((prev) => prev - 1);
    // setCount(count - 1);
  };

  return (
    <>
      <h1 className="text-center">{count}</h1>

      <br />
      <br />

      <section className="text-center">
        <button
          className="bg-teal-800 hover:bg-teal-600 text-white text-xs px-3 py-1 rounded-full"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="bg-teal-800 hover:bg-teal-600 text-white text-xs px-3 py-1 rounded-full"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="bg-teal-800 hover:bg-teal-600 text-white text-xs px-3 py-1 rounded-full"
          onClick={handleDecrement}
        >
          -
        </button>
      </section>
    </>
  );
};

export default Hook1;
