import React from "react";
import { BsBatteryFull } from "react-icons/bs";
import styled from "styled-components";

const BatteryStyled = styled.li`
  width: 3.3em;
  ul {
    margin-top: -0.4em;
    padding: 0;
    list-style: none;
  }
  ul > li {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
`;

const BatteryIcon = styled(BsBatteryFull)`
  width: 100%;
  font-size: 2em;
`;

const Battery = () => (
  <BatteryStyled title="Niveau de la batterie">
    <BatteryIcon />
    <ul>
      <li>100 %</li>
    </ul>
  </BatteryStyled>
);

export default Battery;
