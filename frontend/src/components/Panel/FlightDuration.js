import React from "react";
import styled from "styled-components";

const FlightDurationStyled = styled.li`
  width: 6.6em;
  font-size: 28px;
  font-weight: 300;
  text-align: center;
`;

const FlightDuration = (props) => {
  /**
   * Formats the current fly time
   * @param {number} second Current fly time in s
   * @returns Current fly time in min and s
   */
  const timeInMinuteSecond = (second) =>
    `${parseInt(second / 60)} min ${
      (second / 60 - parseInt(second / 60)) * 60 < 10
        ? "0" + parseInt((second / 60 - parseInt(second / 60)) * 60)
        : parseInt((second / 60 - parseInt(second / 60)) * 60)
    } s`;

  return (
    <FlightDurationStyled title="Durée de vol">
      {timeInMinuteSecond(props.value)}
    </FlightDurationStyled>
  );
};

FlightDuration.defaultProps = { value: 0 };

export default FlightDuration;