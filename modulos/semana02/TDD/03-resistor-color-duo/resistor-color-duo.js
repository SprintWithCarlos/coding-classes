const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

function value(array) {
  const value1 = COLORS.indexOf(array[0]);
  const value2 = COLORS.indexOf(array[1]);
  const result = value1.toString() + value2.toString();
  return parseInt(result);
}


module.exports = value;
