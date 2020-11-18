import React from "react";
import { BsBatteryFull } from "react-icons/bs";

const Battery = () => {
  return (
    <li title="Niveau de la batterie">
      <BsBatteryFull />
      <div>100%</div>
    </li>
  );
};

export default Battery;
