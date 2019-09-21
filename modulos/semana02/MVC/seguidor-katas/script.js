/* eslint-disable max-classes-per-file */

class Kata {
  constructor(name, link) {
    this.name = name;
    this.date = new Date(Date.now()).toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      seconds: 'numeric',
    });
    this.link = link;
    this.status = false;
  }

  static changeStatus() {
    this.status = !this.status;
    console.log(this.status);
    return this.status;
  }
}
let katas = [];
const createKata = (name, link) => {
  const kata = new Kata(name, link);
  katas.push({ ...kata });
  return katas;
};
createKata('Name1', 'Link1');
createKata('Name2', 'Link2');
const deleteKata = (name) => katas = katas.filter((kata) => kata.name !== name);
katas;
deleteKata('Name1');
katas;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
  });
  const name = document.querySelector('#name').value;
  console.log(name);
  const link = document.querySelector('#link').value;
  createKata(name, link);
});
