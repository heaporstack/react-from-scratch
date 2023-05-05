import React from "react";
import ReactDOM from "react-dom/client";

import {Login} from "./components/login";

const App = () => {
  return (
    <Login/>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
