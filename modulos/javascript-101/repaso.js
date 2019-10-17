/* eslint-disable quotes */
/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
const arr = [];
arr[0] = 'Hola';
arr;
const diasDeLaSemana = [];
diasDeLaSemana.push('Lunes', 'Martes', 'Miércoles');
diasDeLaSemana;
diasDeLaSemana.push('Viernes', 'Saturday', 'Domingo');
diasDeLaSemana;
diasDeLaSemana.splice(3, 0, 'Jueves');
diasDeLaSemana;
diasDeLaSemana.splice(5, 1, 'Sábado');
diasDeLaSemana;
for (let i = 0; i < 5; i++) {
  console.log(i);
}

diasDeLaSemana.forEach((item, index) => {
  console.log(item);
});
diasDeLaSemana.forEach((item, index) => {
  console.log("Ya es " + item.toLowerCase());
});

const data = [
  {
    id: 1,
    firstName: 'Carlos',
    lastName: 'Marchena',
  },
  {
    id: 2,
    firstName: 'Ana',
    lastName: 'Liendo',
  },
  {
    id: 3,
    firstName: 'Alejandro',
    lastName: 'Sáiz',
  },
];
data.forEach((item, index) => {
  console.log("Hola " + item.firstName + " " + item.lastName);
});
data.forEach((item, index) => {
  console.log(`Hola ${item.firstName}  ${item.lastName}`);
});
data.map((item) => console.log(`Hola ${item.firstName}  ${item.lastName}`));

console.log(typeof data[1]);
console.log(data[1].id);
console.log(data[1].firstName);
console.log(data[1].lastName);
console.log(typeof data[2]);
console.log(data[2].id);
console.log(data[2].firstName);
console.log(data[2].lastName);
