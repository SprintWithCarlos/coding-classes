const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

function colorCode(color) {
  const number = COLORS.indexOf(color);
  return number;
}

module.exports = {
  COLORS,
  colorCode,
};
