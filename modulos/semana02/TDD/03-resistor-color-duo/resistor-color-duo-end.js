//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (arr) => {
  const value1 = COLORS.indexOf(arr[0]).toString();
  value1
  const value2 = COLORS.indexOf(arr[1]).toString();
  value2
  return parseInt(value1 + value2)
};

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];