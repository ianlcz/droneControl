/**
 * Converts the current speed
 * @param {number} centimerPerSecond Current speed in cm/s
 * @returns {number} Current speed in km/h
 */
const speed = (centimerPerSecond) =>
  (centimerPerSecond * 0.036).toFixed(1) -
    parseInt(centimerPerSecond * 0.036) ===
  0
    ? parseInt(centimerPerSecond * 0.036)
    : (centimerPerSecond * 0.036).toFixed(1);

/**
 * Formats the current fly time
 * @param {number} second Current fly time in s
 * @returns Current fly time in min and s
 */
const flyTime = (second) =>
  `${parseInt(second / 60)} min ${
    (second / 60 - parseInt(second / 60)) * 60 < 10
      ? "0" + parseInt((second / 60 - parseInt(second / 60)) * 60)
      : parseInt((second / 60 - parseInt(second / 60)) * 60)
  } s`;

/**
 * Converts drone altitude
 * @param {number} centimeter Altitude in cm
 * @returns {number} Altitude in m
 */
const altitude = (centimeter) =>
  centimeter < 100
    ? (centimeter / 100).toFixed(1) - parseInt(centimeter / 100) === 0
      ? parseInt(centimeter / 100)
      : (centimeter / 100).toFixed(1)
    : centimeter / 100;

module.exports = { speed, flyTime, altitude };
