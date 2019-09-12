
/* Have the function AdditivePersistence(num) take the num parameter
being passed which will always be a positive integer and return its
additive persistence which is the number of times you must add the
digits in num until you reach a single digit.
For example: if num is 2718 then your program should
return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and
you stop at 9. */
// Recursión

function AdditivePersistence(num) {
  const arr = num.toString().split('');
  arr;
  while (arr.length > 1) {
    let added = 0;
    added;
    for (let i = 0; i < arr.length; i++) {
      added += parseInt(arr[i]);
      console.log(arr[i]);
      added;
    }
    console.log(AdditivePersistence(added));
    return 1 + AdditivePersistence(added);
  }

  return 0;
}

console.log(AdditivePersistence(2178));

function AdditivePersistence01(num) {
  function arrprep(numb) {
    const numstr = numb.toString();
    const arr = numstr.split('');
    const numarr = arr.map((val) => parseInt(val));
    return numarr;
  }

  function addup(arr) {
    const redux = arr.reduce((a, b) => a + b);
    return redux;
  }

  let count = 0;

  while (num > 9) {
    num = addup(arrprep(num));
    count++;
  }

  return count;
}
console.log(AdditivePersistence01(2781));
