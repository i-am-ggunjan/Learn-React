import React from "react";
import PassData2 from "./components/PassData2";

const App = () => {
  return (
    <>
      <p>App Component</p>
      <PassData2 sex='Male' age={'50'}>
        <h1>I'm 1st Child</h1>
        <p>I'm 2nd Child after h1</p>
      </PassData2>
    </>
  );
};

export default App;
