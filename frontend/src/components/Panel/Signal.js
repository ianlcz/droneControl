import React from "react";
import { RiSignalWifiOffFill } from "react-icons/ri";
import styled from "styled-components";

const SignalIcon = styled(RiSignalWifiOffFill)`
  font-size: 2em;
`;

const Signal = () => (
  <li title="Signal Wi-Fi : 0dB">
    <SignalIcon />
  </li>
);

export default Signal;
