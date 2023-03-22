import React from "react";
import C1 from "./api_components/C1";
import C2 from "./api_components/C2";
import { Store } from "./api/Store";

const App = () => {
  return (
    <>
      <Store>
        <C1 />
        <C2 />
      </Store>
    </>
  );
};

export default App;
