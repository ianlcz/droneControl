import React, { useEffect, useState } from "react";
import { withGlobalState } from "react-globally";
import {
  RiSignalWifi1Fill,
  RiSignalWifi2Fill,
  RiSignalWifi3Fill,
  RiSignalWifiFill,
  RiSignalWifiOffFill,
} from "react-icons/ri";
import styled from "styled-components";
import socket from "../../socket";

const SignalStyled = styled.li`
  font-size: 2em;
`;

const Signal = ({ globalState, setGlobalState }) => {
  const [SNR, setSNR] = useState(0);

  useEffect(() => {
    socket.on("snr", setSNR);
    setSNR(Number(setSNR));
    return () => socket.removeListener("snr");
  }, []);

  useEffect(() => {
    if (SNR && SNR > 10 && !isNaN(SNR)) {
      setGlobalState({ isDroneConnected: true });
    } else {
      setGlobalState({ isDroneConnected: false });
    }
  }, [SNR]);

  return (
    <SignalStyled title={`Signal Wi-Fi${SNR ? ` : ${SNR}dB` : ""}`}>
      {SNR >= 41 ? (
        <RiSignalWifiFill />
      ) : SNR <= 40 && SNR >= 25 ? (
        <RiSignalWifi3Fill />
      ) : SNR <= 24 && SNR >= 16 ? (
        <RiSignalWifi2Fill />
      ) : SNR <= 15 && SNR > 10 ? (
        <RiSignalWifi1Fill />
      ) : (
        <RiSignalWifiOffFill />
      )}
    </SignalStyled>
  );
};

export default withGlobalState(Signal);
