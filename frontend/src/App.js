import React from "react";
import { createGlobalStyle } from "styled-components";
import Connection from "./components/Connection";
import Commands from "./components/button/Commands";
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
    background: linear-gradient(0deg, #0b3268 0%, #114da1 100%) no-repeat fixed;
  }
`;

const App = (props) => {


  return (
    <div>
      <AppStyled />
      <Connection />
      <Commands />
      <Panel />
    </div>
  );
};

export default App;