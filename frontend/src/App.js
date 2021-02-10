import React from "react";
import React from "react";
import {
  createGlobalStyle
} from "styled-components";
import Panel from "./components/Panel/Panel";
import Direction from "./components/button/direction";

const AppStyled = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    position: relative;
    margin: 0;
    padding: 0;
    min-height: 100%;
    background: linear-gradient(0deg, #0b3268 0%, #114da1 100%) no-repeat fixed;
  }
`;

const App = () => (
    <React.Fragment >
      <AppStyled />
      <Direction />
      <Panel />
    </React.Fragment>
);

export default App;