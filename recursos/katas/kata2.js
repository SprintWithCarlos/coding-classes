/* eslint-disable no-plusplus */
const chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9];
function kata(chores) {
  const pairedChores = [];
  for (let i = 0; i < chores.length / 2; i++) {
    const choresAsc = [...chores].sort();
    choresAsc;
    const choresDesc = [...chores].sort((a, b) => b - a);
    choresDesc;

    pairedChores.push(choresDesc[i] + choresAsc[i]);
    pairedChores;
  }
  pairedChores;
  const final = pairedChores.sort((a, b) => a - b);
  return final;
}


console.log(kata(chores));
module.exports = kata;
