let katas = [];
module.exports = class Kata {
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
    return this.status;
  }

  static createKata(name, link) {
    const kata = new Kata(name, link);
    katas.push({ ...kata });
    return kata;
  }

  static readKatas() { return katas; }

  static deleteKata(name) {
    const changedKatas = katas.filter((kata) => kata.name !== name);
    katas = changedKatas;
    return katas;
  }
};
