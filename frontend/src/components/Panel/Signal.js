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

const Signal = () => {
  let SNR = null;
  return (
    <SignalStyled title={`Signal Wi-Fi${SNR ? ` : ${SNR}dB` : ""}`}>
      {SNR >= 41 ? (
        <RiSignalWifiFill />
      ) : SNR <= 40 && SNR >= 25 ? (
        <RiSignalWifi3Fill />
      ) : SNR <= 24 && SNR >= 16 ? (
        <RiSignalWifi2Fill />
      ) : SNR <= 15 && SNR >= 10 ? (
        <RiSignalWifi1Fill />
      ) : (
        <RiSignalWifiOffFill />
      )}
    </SignalStyled>
  );
};

export default Signal;
