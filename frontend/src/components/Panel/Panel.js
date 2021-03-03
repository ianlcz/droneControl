import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Battery from "./Battery";
import ElevationSpeed from "./ElevationSpeed";
import Signal from "./Signal";
import Temperature from "./Temperature";
import FlightDuration from "./FlightDuration";
import socket from "../../socket";

const PanelStyled = styled.ul`
  display: flex;
  margin: 0 auto;
  padding: 0;
  width: 70%;
  height: 6em;
  background-color: white;
  color: #0b3268;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  border-radius: 10em;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Manrope";
`;

const Panel = () => {
  const [droneState, setDroneState] = useState({});

  useEffect(() => {
    socket.on("dronestate", setDroneState);
    setDroneState(setDroneState);
    return () => socket.removeListener("dronestate");
  }, []);

  return (
    <PanelStyled>
      <Signal />
      <Temperature
        value={(Number(droneState.temph) + Number(droneState.templ)) / 2}
      />
      <ElevationSpeed
        elevation={Number(droneState.h)}
        speed={Number(droneState.vgz)}
      />
      <FlightDuration value={Number(droneState.time)} />
      <Battery level={Number(droneState.bat)} />
    </PanelStyled>
  );
};

export default Panel;
