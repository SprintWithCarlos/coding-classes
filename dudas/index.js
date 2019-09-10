// EJERCICIOS QUE NECESITO QUE REVISEMOS JUNTOS.
// CIERTAS FORMAS DE COMO ESTAN HECHOS ME GENERAN DUDAS

// ARRAY CARDIO DAY 1

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

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

/* DUDA */

//   Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const ordered = inventors.sort((firstInventor, secondInventor) => {
  firstInventor;
  secondInventor;
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

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'pogostick',
];
const obj1 = {};
const item = 'truck';
obj1[item] = 1;
obj1;

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

//    FLEX PANEL IMG GALLERY

/* Flex Items */
/* .panel > * {
        margin: 0;
        width: 100%;
        transition: transform 0.5s;
        flex: 1 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .panel > *:first-child { transform: translateY(-100%); }
      .panel.open-active > *:first-child { transform: translateY(0); }
      .panel > *:last-child { transform: translateY(100%); }
      .panel.open-active > *:last-child { transform: translateY(0); }

      const panels = document.querySelectorAll('.panel');

      function toggleOpen() {
        console.log('Hello');
        this.classList.toggle('open');
      }

      function toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex')) {
          this.classList.toggle('open-active');
        }
      }

      panels.forEach(panel => panel.addEventListener('click', toggleOpen));
      panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

*/
