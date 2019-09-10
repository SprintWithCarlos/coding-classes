/* eslint-disable no-unused-expressions */
// EJERCICIOS QUE NECESITO QUE REVISEMOS JUNTOS.
// CIERTAS FORMAS DE COMO ESTAN HECHOS ME GENERAN DUDAS


const inventors = [
  {
    first: 'Albert', last: 'Einstein', year: 1879, passed: 1955,
  },
  {
    first: 'Isaac', last: 'Newton', year: 1643, passed: 1727,
  },
  {
    first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642,
  },
  {
    first: 'Marie', last: 'Curie', year: 1867, passed: 1934,
  },
  {
    first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630,
  },
  {
    first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543,
  },
  {
    first: 'Max', last: 'Planck', year: 1858, passed: 1947,
  },
  {
    first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979,
  },
  {
    first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852,
  },
  {
    first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905,
  },
  {
    first: 'Lise', last: 'Meitner', year: 1878, passed: 1968,
  },
  {
    first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909,
  },
];


/* DUDA */

//   Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const ordered = inventors.sort((firstInventor, secondInventor) => {
  inventors;
  if (firstInventor.year > secondInventor.year) {
    return 1;
  }
  return -1;
});
ordered;
/*  const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered); */


const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];
const test = items[4].value;
test;
items.sort((firstItem, secondItem) => {
  console.log(firstItem.name);
  console.log(secondItem.name);
  if (firstItem.name > secondItem.name) {
    return 1;
  }
  if (firstItem.name < secondItem.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
items;

items.sort((firstItem, secondItem) => (firstItem.name > secondItem.name ? 1 : -1));
// 5. Sort the inventors by years lived
const oldest = inventors.sort((firstInventor, secondInventor) => {
  const liveSpan1 = firstInventor.passed - firstInventor.year;
  const liveSpan2 = secondInventor.passed - secondInventor.year;
  return liveSpan1 > liveSpan2 ? -1 : 1;
});
oldest;
console.table(oldest);
