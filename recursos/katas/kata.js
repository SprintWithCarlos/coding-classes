const array = [9, 8, 7, 3, 6, 5, 2, 4];
const array2 = [9, 8, 7, 6, 5, 4, 3, 2];
let highest = 0;
let mountainFire = 0;
for (let i = 0; i < 8; i++) {
  const mountainH = parseInt(readline()); // represents the height of one mountain.
  if (highest < mountainH) {
    highest = mountainH;
    mountainFire = i;
  }
}
