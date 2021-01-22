import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import { store } from "store";
import reportWebVitals from "./reportWebVitals";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
});

ReactDOM.render(
  <ReduxProvider {...{ store }}>
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
