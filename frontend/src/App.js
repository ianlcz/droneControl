import React from "react";
import { createGlobalStyle } from "styled-components";
import Panel from "./components/Panel";

const AppStyled = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    position: relative;
    margin: 0;
    padding: 0;
    min-height: 100%;
    background: linear-gradient(111.34deg, #0b3268 0%, #114da1 100%) no-repeat fixed;
  }
`;

const App = () => (
  <React.Fragment>
    <AppStyled />
    <Panel />
  </React.Fragment>
);

export default App;
