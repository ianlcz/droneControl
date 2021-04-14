import React from "react";
import styled from "styled-components";
import { IoIosWarning } from "react-icons/io";

const NotificationStyled = styled.div`
  display: flex;
  border-radius: 20px;
  width: 30%;
  margin: 2em auto;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    background-color: darkred;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .left > svg {
    color: white;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #ea0400;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .right > p {
    color: white;
    font-family: "Manrope";
  }
`;

const Notification = ({ message }) => {
  return (
    <NotificationStyled>
      <div className="left">
        <IoIosWarning size={30} />
      </div>
      <div className="right">
        <p>{message}</p>
      </div>
    </NotificationStyled>
  );
};

export default Notification;
