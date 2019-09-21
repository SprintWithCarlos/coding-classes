
class Kata {
  constructor(name, link) {
    this.name = name;
    // this.date = new Date(Date.now()).toLocaleDateString('es-ES', {
    //   weekday: 'long',
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    //   hour: 'numeric',
    //   minute: 'numeric',
    //   seconds: 'numeric',
    // });
    this.link = link;
    this.status = false;
  }

  static changeStatus() {
    this.status = !this.status;
    console.log(this.status);
    return this.status;
  }
}

const katas = [];
const createKata = (name, link) => {
  const kata = new Kata(name, link);
  katas.push({ ...kata });
  return kata;
};
const readKatas = () => katas;

module.exports = {
  createKata,
  readKatas,
};
