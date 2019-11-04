/* eslint-disable no-plusplus */
// EXAMPLE TEST CASES
// input: "Hello-LOL"
// output: hELLO-lol

function swapCase(str) {
  // turn the string into an array of characters
  const chars = str.split('');

  // loop through the array swapping letter cases
  // uppercase -> lowercase
  // lowercase -> uppercase
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i].toUpperCase()) {
      chars[i] = chars[i].toLowerCase();
    } else if (chars[i] === chars[i].toLowerCase()) {
      chars[i] = chars[i].toUpperCase();
    }
  }

  // return the modified array of characters joined as a string
  return chars.join('');
}

swapCase('Hello World');
// input: "Hello-LOL"
// output: hELLO-lol
console.log(swapCase('Hello-LOL'));

/* function swapCase01(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i) !== null) {
      str[i] = str[i].toUpperCase();
    } if (str[i].match(/[A-Z]/i) !== null) {
      str[i] = str[i].toLowerCase();
    }
  }
  return str;
}

console.log(swapCase01('Hello-LOL'));
*/
function swapCase02(str) {
  return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
  return str.replace(/\b[A-Z]/gi, (char) => char.toLowerCase());
}
swapCase02('Hello-LOL'); 
const swapCase01 = (str) => str.replace(/([A-Z]+)|([a-z]+)/g, (match, upper) => (upper ? match.toLowerCase() : match.toUpperCase()),);

console.log(swapCase01('Hello-LOL'));

function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  p1;
  p2;
  p3;

  return [p1, p2, p3].join(' - ');
}

const newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));


/* Flex Items
    .panel > * {
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
      panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); */
