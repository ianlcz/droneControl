import React from "react";
import {
  RiSignalWifi1Fill,
  RiSignalWifi2Fill,
  RiSignalWifi3Fill,
  RiSignalWifiFill,
  RiSignalWifiOffFill,
} from "react-icons/ri";
import styled from "styled-components";

const SignalStyled = styled.li`
  font-size: 2em;
`;

const Signal = (props) => (
  <SignalStyled title={`Signal Wi-Fi${props.SNR ? ` : ${props.SNR}dB` : ""}`}>
    {props.SNR >= 41 ? (
      <RiSignalWifiFill />
    ) : props.SNR <= 40 && props.SNR >= 25 ? (
      <RiSignalWifi3Fill />
    ) : props.SNR <= 24 && props.SNR >= 16 ? (
      <RiSignalWifi2Fill />
    ) : props.SNR <= 15 && props.SNR >= 10 ? (
      <RiSignalWifi1Fill />
    ) : (
      <RiSignalWifiOffFill />
    )}
  </SignalStyled>
);

Signal.defaultProps = { SNR: 0 };

export default Signal;
