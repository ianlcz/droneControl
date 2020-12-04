import React, { useState } from "react";
import { BsBattery, BsBatteryFull, BsBatteryHalf } from "react-icons/bs";
import styled from "styled-components";

const BatteryStyled = styled.li`
  width: 3.3em;
  color: ${(props) =>
    props.level <= 20 && props.level >= 10
      ? "#685e0b"
      : props.level < 10
      ? "#680b32"
      : null};
  svg {
    width: 100%;
    font-size: 2em;
  }
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

const Battery = () => {
  const levelBattery = 100;
  return (
    <BatteryStyled title="Niveau de la batterie" level={levelBattery}>
      {levelBattery <= 50 && levelBattery > 5 ? (
        <BsBatteryHalf />
      ) : levelBattery <= 5 ? (
        <BsBattery />
      ) : (
        <BsBatteryFull />
      )}
      <ul>
        <li>{levelBattery} %</li>
      </ul>
    </BatteryStyled>
  );
};

export default Battery;
