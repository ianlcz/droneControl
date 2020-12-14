import React from "react";
import styled from "styled-components";

const TemperatureStyled = styled.li`
  width: 3em;
  font-size: 28px;
  font-weight: 300;
  text-align: center;
`;

const Temperature = (props) => (
  <TemperatureStyled title="Température">{`${props.value}°C`}</TemperatureStyled>
);

Temperature.defaultProps = { value: 0 };

export default Temperature;
