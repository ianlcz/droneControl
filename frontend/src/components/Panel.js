import React from "react";
import Battery from "./Battery";
import ElevationSpeed from "./ElevationSpeed";
import Signal from "./Signal";
import Temperature from "./Temperature";
import Time from "./Time";

const Panel = () => {
  return (
    <ul>
      <Signal />
      <Temperature />
      <ElevationSpeed />
      <Time />
      <Battery />
    </ul>
  );
};

export default Panel;
