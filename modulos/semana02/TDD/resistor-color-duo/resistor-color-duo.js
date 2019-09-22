/* eslint-disable radix */
//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

module.exports = COLORS;

function value(arr) {
  const value1 = COLORS.indexOf(arr[0]).toString();
  const value2 = COLORS.indexOf(arr[1]).toString();
  const finalValue = value1 + value2;
  return parseInt(finalValue);
}
module.exports = value;
