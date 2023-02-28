import React from "react";
import PassData1 from "./components/PassData1";

const App = () => {
    let height = 5.6;
    return (
      <>
        <p>App Component</p>
        <PassData1
          name="Gaurav"
          height={height}
          age={20}
          arr={[5, 40, 60, 7, 80]}
          greet={(name) => {
            console.log(`Good Morning, Everyone... from ${name}`);
          }}
          language={function (name) {
            return `Good Morning, ${name}-Sir`;
          }}
          obj={{
            name: "Gaurav",
            age: 30,
            gender: "Male",
          }}
          und={undefined}
          null={null}
          na={NaN}
        />
      </>
    );
  };
  
  export default App;
