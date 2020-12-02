import React from "react";
import styled from "styled-components";

const FlightDurationStyled = styled.li`
  width: 6.6em;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

const FlightDuration = () => (
  <FlightDurationStyled title="Durée de vol">0 min 00 s</FlightDurationStyled>
);

export default FlightDuration;
