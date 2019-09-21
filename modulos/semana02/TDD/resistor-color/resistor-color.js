//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
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

const colorCode = (color) => {
  const code = COLORS.indexOf(color.toLowerCase());
  return code;
};
module.exports = {
  colorCode,
  COLORS,
};
