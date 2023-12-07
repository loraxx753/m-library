import React from "react";
import ReactDOM from "react-dom";
import theme from './themes/default'

import "./index.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "@mui/material";
import { FromLibrary } from "./components";

const App = () => (
<ThemeProvider theme={theme}>
    <FromLibrary />
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
