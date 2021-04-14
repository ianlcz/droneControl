import React from "react";
import {
  IoBatteryCharging,
  IoBatteryDead,
  IoBatteryFull,
  IoBatteryHalf,
} from "react-icons/io5";
import styled from "styled-components";

const BatteryStyled = styled.li`
  width: 3.3em;
  color: ${(props) =>
    props.level <= 20 && props.level >= 10
      ? "#686832"
      : props.level < 10 && props.level !== null
      ? "#680b32"
      : "#0b6832"};
  svg {
    width: 100%;
    font-size: 2em;
  }
  ul {
    margin-top: -0.6em;
    padding: 0;
    list-style: none;
  }
  ul > li {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
`;

const Battery = (props) => (
  <BatteryStyled
    title={
      props.level === undefined || isNaN(props.level) || props.level === null
        ? "En charge..."
        : "Niveau de la batterie"
    }
    level={props.level}
  >
    {props.level <= 50 && props.level > 5 ? (
      <IoBatteryHalf />
    ) : props.level <= 5 && props.level !== null ? (
      <IoBatteryDead />
    ) : props.level === undefined ||
      isNaN(props.level) ||
      props.level === null ? (
      <IoBatteryCharging />
    ) : (
      <IoBatteryFull />
    )}
    {!isNaN(props.level) && props.level !== null ? (
      <ul>
        <li>{`${props.level} %`}</li>
      </ul>
    ) : null}
  </BatteryStyled>
);

Battery.defaultProps = { level: null };

export default Battery;
