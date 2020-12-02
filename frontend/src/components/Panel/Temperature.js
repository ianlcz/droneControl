import React from "react";
import styled from "styled-components";

const TemperatureStyled = styled.li`
  width: 3em;
  font-size: 30px;
  font-weight: 300;
`;

const Temperature = () => (
  <TemperatureStyled title="Température">0°C</TemperatureStyled>
);

export default Temperature;
