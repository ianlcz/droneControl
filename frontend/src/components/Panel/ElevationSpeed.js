import React from "react";
import styled from "styled-components";

const ElevationSpeedStyled = styled.li`
  display: flex;
  flex-direction: column;
  span {
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

const ElevationSpeed = () => {
  return (
    <ElevationSpeedStyled>
      <span title="Altitude">0 m</span>
      <ul>
        <li title="Vitesse">0 km/h</li>
      </ul>
    </ElevationSpeedStyled>
  );
};

export default ElevationSpeed;
