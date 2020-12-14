import React from "react";
import styled from "styled-components";

const ElevationSpeedStyled = styled.li`
  display: flex;
  flex-direction: column;
  span {
    width: 3.3em;
    font-size: 48px;
    font-weight: 700;
    text-align: center;
  }
  ul {
    margin-top: -0.4em;
    padding: 0;
    list-style: none;
  }
  ul > li {
    color: #114da1;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
`;

const ElevationSpeed = (props) => {
  /**
   * Converts drone's altitude
   * @param {number} centimeter Altitude in cm
   * @returns {number} Altitude in m
   */
  const altitudeInMeter = (centimeter) =>
    centimeter < 100
      ? (centimeter / 100).toFixed(1) - parseInt(centimeter / 100) === 0
        ? parseInt(centimeter / 100)
        : (centimeter / 100).toFixed(1)
      : centimeter / 100;

  /**
   * Converts the current speed
   * @param {number} centimerPerSecond Current speed in cm/s
   * @returns {number} Current speed in km/h
   */
  const speedInKilometerPerHour = (centimerPerSecond) =>
    (centimerPerSecond * 0.036).toFixed(1) -
      parseInt(centimerPerSecond * 0.036) ===
    0
      ? parseInt(centimerPerSecond * 0.036)
      : (centimerPerSecond * 0.036).toFixed(1);

  return (
    <ElevationSpeedStyled>
      <span title="Altitude">{`${altitudeInMeter(props.elevation)} m`}</span>
      <ul>
        <li title="Vitesse">{`${speedInKilometerPerHour(
          props.speed
        )} km/h`}</li>
      </ul>
    </ElevationSpeedStyled>
  );
};

ElevationSpeed.defaultProps = { elevation: 0, speed: 0 };

export default ElevationSpeed;
