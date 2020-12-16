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
  return (
    <PanelStyled>
      <Signal />
      <Temperature />
      <ElevationSpeed />
      <FlightDuration />
      <Battery />
    </PanelStyled>
  );
};

export default Panel;
