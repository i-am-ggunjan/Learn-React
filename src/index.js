import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//! ================React================== !//
// let ele = React.createElement("p", { className: "main" }, "Demo");

// let ele2 = React.createElement("P", { className: "main" }, "Demo");
//? It will not give error as this time we are using react dom. It will treat 'P' as a 'p' tag not as component.

// ReactDOM.createRoot(document.getElementById("root")).render(ele);

//! ==================JSX================== !//
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <p className="main">Demo</p>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(<P className='main'>Demo</P>);
// ? It will give an error --> 'P' is not defined /// In JSX, tag should be in lower case. If capital then it will treat as component.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);