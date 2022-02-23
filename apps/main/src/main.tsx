import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "ui";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
