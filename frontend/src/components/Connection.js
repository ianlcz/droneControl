import React, { useEffect, useState } from "react";
import styled from "styled-components";
import socket from "../socket";

const ConnectionStyled = styled.div`
  padding: 0.8em;
  p {
    margin: auto;
    margin-right: 0;
    padding: 0.6em 1em;
    width: max-content;
    border: ${(props) => (props.isConnected ? 0 : "1px solid white")};
    border-radius: 2em;
    ${(props) =>
      props.isConnected
        ? "box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);background: white;"
        : null}
    font-family: Roboto;
    font-size: 12px;
    font-weight: ${(props) => (props.isConnected ? 500 : 400)};
    text-transform: uppercase;
    color: ${(props) => (props.isConnected ? "#114da1" : "white")};
  }
`;

const Connection = () => {
  const useConnection = () => {
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
      socket.on("status", setIsConnected);
      return () => socket.removeListener("status");
    }, []);
    return isConnected;
  };

  const isConnected = useConnection();

  return (
    <ConnectionStyled isConnected={isConnected}>
      <p>{isConnected ? "Drone connecté" : "Drone non connecté"}</p>
    </ConnectionStyled>
  );
};

export default Connection;
