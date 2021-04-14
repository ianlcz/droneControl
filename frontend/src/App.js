import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Connection from "./components/Connection";
import Commands from "./components/button/Commands";
import Panel from "./components/Panel/Panel";
import Notification from "./components/Notification";
import socket from "./socket";

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
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    socket.on("pop", setMessageError);
    setMessageError(setMessageError);
    setTimeout(() => {
      setMessageError("");
    }, 3000);
    return () => socket.removeListener("pop");
  }, []);

  console.log(("Error : ", messageError));

  return (
    <div>
      <AppStyled />
      <Connection />
      {messageError !== "" ? <Notification message={messageError} /> : null}
      <Commands />
      <Panel />
    </div>
  );
};

export default App;
