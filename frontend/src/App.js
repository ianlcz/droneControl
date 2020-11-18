import React from "react";
import { createGlobalStyle } from "styled-components";

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
    <h1>Ydays - droneControl</h1>
    <h2>You are in droneControl app !</h2>
  </React.Fragment>
);

export default App;
