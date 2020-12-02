import React from "react";
import styled from "styled-components";

const FlightDurationStyled = styled.li`
  font-size: 30px;
  font-weight: 300;
`;

const FlightDuration = () => {
  return <FlightDurationStyled title="Durée de vol">0 min 00 s</FlightDurationStyled>;
};

export default FlightDuration;
