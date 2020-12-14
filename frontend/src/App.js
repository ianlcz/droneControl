import React from "react";
import { createGlobalStyle } from "styled-components";
import Panel from "./components/Panel/Panel";

const AppStyled = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    position: relative;
    margin: 0;
    padding: 0;
    min-height: 100%;
    background: linear-gradient(0deg, #114da1 0%, #0b3268 100%) no-repeat fixed;
  }
`;

const App = () => (
  <React.Fragment>
    <AppStyled />
    <Panel />
  </React.Fragment>
);

export default App;
